<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class JobController extends Controller
{

    public function postedJobs($id)
    {
        // $user = Auth::guard('api')->user(); 
        DB::enableQueryLog();
        $postedJobs = Job::where('posted_by_user_id', '!=', $id)->get();
        return response()->json([
            'status' => true,
            'message' => 'Data fetched successfully!!',
            'data' => $postedJobs
        ]);
        dd(DB::getQueryLog());
    }

    public function myJobs($id)
    {

        // DB::enableQueryLog();

        $myJobs = Job::where('posted_by_user_id', $id)->get();
        return response()->json([
            'status' => true,
            'message' => 'Data fetched successfully!!',
            'data' => $myJobs
        ]);
        // dd(DB::getQueryLog());

    }

    public function jobs()
    {
        //  DB::enableQueryLog();
        $jobs = Job::all();
        //  dd(DB::getQueryLog());
        return response()->json([
            'status' => true,
            'message' => 'Data fetched successfully!!',
            'data' => $jobs
        ]);
    }

    public function createJob(Request $request)
    {
        // DB::enableQueryLog();
        // return response($request["posted_by_user_id"]);

        $request->validate([

            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'located' => 'required|string|max:255',
            'salary' => 'required|integer',
            'skills' => 'required|string|max:255',
            'experience' => 'required|integer|max:255',


        ]);

        $job = new Job();
        $job->title = $request->input("title");
        $job->description = $request->input("description");
        $job->company = $request->input("company");
        $job->located = $request->input("located");
        $job->salary = $request->input("salary");
        $job->posted_by_user_id = $request->posted_by_user_id;
        $job->skills = $request->input("skills");
        $job->experience = $request->input("experience");

        $job->save();
        // dd(DB::getQueryLog());
        return response()->json([
            'status' => true,
            'message' => 'New Product Inserted!',
            'data' => $job

        ]);
    }
}
