<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function user(Request $request){
        $validator = validator()->make(request()->all(), [
            "name"=> 'required',
            "email"=>'required',
            "password"=>'required'
        ]);
        if ($validator->fails()) {
            return ['Error' => $validator->errors()];
        }
        else{
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            return response()->json(['message' => 'User created successfully'], 201);
        }
    }
    public function Login(){
        $validator = validator()->make(request()->all(), [
            "email"=>'required',
            "password"=>'required'
        ]);
        if ($validator->fails()) {
            return ['Error' => $validator->errors()];
        }
        $credentials = request(['email', 'password']);
        if (!$token = auth()->attempt($credentials, true)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $token=Auth::attempt($credentials);
        return response()->json(["status" => true,
         "message" => "Successfully Logged In",
          "data" => ["token" => $token]
        ],201);
    }
}
