import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50/50 p-4">
            <Card className="w-full max-w-md shadow-lg border-2 border-gray-100 hover:border-blue-100 transition-all duration-300">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
                    <CardDescription className="text-center">
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            className="focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg transition-all duration-300 active:scale-[0.98]">
                        Sign In
                    </Button>
                    <div className="text-center text-sm text-gray-500">
                        Don&apos;t have an account? <span className="text-blue-600 font-medium hover:underline cursor-pointer">Register</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;