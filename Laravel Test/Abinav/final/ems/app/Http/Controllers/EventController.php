<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Image;
use Illuminate\Http\Request;
use Carbon\Carbon;


class EventController extends Controller
{

    public function createEvent(Request $request)
    {
        $request->validate([
            'eventName' => 'required|string|max:255',
            'eventDescription' => 'required|string',
            'eventDate' => 'required',
            'seats' => 'required|integer',
        ]);
        $dateString = preg_replace('/\s\(.*\)/', '', $request->input('eventDate'));

        $event = new Event([
            'event_name' => $request->input('eventName'),
            'event_description' => $request->input('eventDescription'),
            'event_date' => Carbon::parse($dateString)->toDateTimeString(),
            'seats' => $request->input('seats'),
        ]);
        $event->save();

        $file = $request->file('file');
        $fileName = $file->getClientOriginalName();

        $status = $file->move(public_path('images/Events'), $fileName);

        $image = new Image([
            'event_id' => $event->id,
            'image_url' => asset("images/Events/$fileName"),
        ]);
        $image->save();

        return response()->json(['message' => 'Event created successfully'], 201);
    }

    public function getEvents()
    {
        $eventDetails = Event::with("images")->get();
        return response()->json($eventDetails);
    }

    public function bookSeats(Request $request, $eventId)
    {
        $request->validate([
            'seats' => 'required|integer|min:1',
        ]);

        $event = Event::findOrFail($eventId);

        if ($event->seats >= $request->input('seats')) {
            $event->decrement('seats', $request->input('seats'));

            return response()->json(['message' => 'Seats booked successfully'], 200);
        } else {
            return response()->json(['error' => 'Not enough available seats'], 400);
        }
    }
}
