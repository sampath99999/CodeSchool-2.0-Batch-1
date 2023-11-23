<?php

namespace App\Http\Controllers;

use App\Models\Applyjob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApplyJobController extends Controller
{
    public function applications()
    {
        //  DB::enableQueryLog();
        $jobs = Applyjob::all();
        //  dd(DB::getQueryLog());
        return response()->json([
            'status' => true,
            'message' => 'Data fetched successfully!!',
            'data' => $jobs
        ]);
    }

    public function applyJob(Request $request)
    {
        // DB::enableQueryLog();
        // return response($request["posted_by_user_id"]);

        $request->validate([

            'jobid' => 'required|integer|max:255',



        ]);

        $job = new Applyjob();
        $job->jobid = $request->input("jobid");
        $job->userid = $request->userid;


        $job->save();
        // dd(DB::getQueryLog());
        return response()->json([
            'status' => true,
            'message' => 'Successfully Applied!',
            'data' => $job

        ]);
    }
}
