<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Role;
use DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Role::truncate();
        // DB::table('role_user')->truncate();
        
        $adminRole = Role::where('name', 'admin')->first();
        $userRole  = Role::where('name', 'user')->first();

        $admin = User ::create([
            'name' => 'Bavaram',
            'email' => 'nkbram95@gmail.com',
            'password' => Hash::make('123456789'),
        ]);
        $user = User ::create([
            'name' => 'User',
            'email' => 'user@user.com',
            'password' => Hash::make('password'),
        ]);
        $user->roles()->attach($userRole);
        $user = User ::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('password'),
        ]);

        $admin->roles()->attach($adminRole);
        $user->roles()->attach($userRole);
      
    }
}
