<?php

namespace App\Http\Controllers;

use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UploadController extends Controller
{
    //
    public function upload(Request $request){

        
        
        $upload = new Upload;

        $upload->name = $request->name;
        $upload->user_id = Auth::user()->id;
        $file = $request->file('file');
        $fileName = time() . '_' . $file->getClientOriginalName();
        $status = $file->move(public_path('uploads'), $fileName);
        $upload->image_url= asset("uploads/$fileName");
        $upload->save();
        return response()->json(["status"=> $status,""=> $fileName]);


    } 
    public function getData(){
        $data = Upload::all();
        return response()->json($data);
    }
}

