<?php

namespace App\Http\Controllers;

use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UploadController extends Controller
{
    //
    public function upload(Request $request){
        $validator = validator()->make(request()->all(), [
            "name"=> 'required'
        ]);
        if ($validator->fails()) {
            return ['Error' => $validator->errors()];
        }
        try {
            $upload = new Upload;
            $upload->name = $request->name;
            $upload->user_id = Auth::user()->id;
            $file = $request->file('file');
            if ($file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('uploads'), $fileName);
                $upload->image_url = asset("uploads/$fileName");
                $upload->save();
                return response()->json(["status"=>true],201);
            } else {
                throw new \Exception('No file uploaded');
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    } 
    public function getData(){
        $data = Upload::all();
        return response()->json(['status'=>true,'data'=>$data]);
    }
}

