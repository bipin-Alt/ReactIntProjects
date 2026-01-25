import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { User, PenSquare, LayoutDashboard, LogIn } from "lucide-react";

const Navbar = () => {
    const location = useLocation();
    const isLogin = location.pathname === '/login';

    if (isLogin) return null;

    return (
        <nav className="border-b bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-xl font-bold text-blue-600 tracking-tight">
                            MiniBlog
                        </Link>
                        <div className="hidden md:flex items-center gap-6">
                            <Link to="/" className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-500'}`}>
                                <div className="flex items-center gap-2">
                                    <LayoutDashboard className="w-4 h-4" />
                                    Feed
                                </div>
                            </Link>
                            <Link to="/add-blog" className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname === '/add-blog' ? 'text-blue-600' : 'text-gray-500'}`}>
                                <div className="flex items-center gap-2">
                                    <PenSquare className="w-4 h-4" />
                                    Write
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/profile">
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                                <User className="w-5 h-5 text-gray-600" />
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="outline" className="hidden sm:flex items-center gap-2">
                                <LogIn className="w-4 h-4" />
                                Logout
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
