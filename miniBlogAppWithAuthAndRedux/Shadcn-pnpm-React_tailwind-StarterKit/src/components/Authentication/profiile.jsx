import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

const Profile = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50/50 p-4">
            <Card className="w-full max-w-md shadow-lg border-2 border-gray-100 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="-mt-16 flex justify-center">
                    <div className="h-32 w-32 rounded-full border-4 border-white bg-white shadow-md flex items-center justify-center overflow-hidden">
                        <div className="bg-gray-100 h-full w-full flex items-center justify-center">
                            <User className="w-16 h-16 text-gray-400" />
                        </div>
                    </div>
                </div>
                <CardHeader className="text-center pt-4">
                    <CardTitle className="text-2xl font-bold">John Doe</CardTitle>
                    <p className="text-gray-500">Member since January 2024</p>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-600 font-medium">Email</span>
                            <span className="text-gray-900">john@example.com</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-600 font-medium">Role</span>
                            <span className="text-gray-900">Administrator</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-600 font-medium">Blogs Posted</span>
                            <span className="text-gray-900">12</span>
                        </div>
                    </div>
                    <Button variant="destructive" className="w-full flex items-center justify-center gap-2 py-6 font-semibold text-lg transition-all active:scale-[0.98]">
                        <LogOut className="w-5 h-5" />
                        Logout
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Profile;