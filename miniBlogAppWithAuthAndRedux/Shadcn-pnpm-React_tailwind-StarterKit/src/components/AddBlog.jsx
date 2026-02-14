import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send } from "lucide-react";
import { useDispatch } from 'react-redux';
import { handleBlogAddition } from '../store/slice/blogSlice';
import { useSelector } from 'react-redux';

const AddBlog = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state)=> state.AddBlog.formData); // here you will get errror because I think you have to use getSlice() method in here//
    console.log(formData);

    const handleOnChange = (e) =>{
        dispatch(
            handleBlogAddition({
               name : e.target.name,
               value : e.target.value
        })
       );
    };

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10">
            <div className="mb-8 flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create New Post</h1>
                    <p className="text-gray-500">Share your thoughts with the community</p>
                </div>
                <Link to="/">
                    <Button variant="outline" className="flex items-center gap-2 hover:bg-gray-100 transition-all">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Feed
                    </Button>
                </Link>
            </div>

            <Card className="shadow-xl border-t-4 border-t-blue-600">
                <CardHeader>
                    <CardTitle className="text-xl">Post Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-base">Blog Title</Label>
                        <Input
                            id="title"
                            onChange= {handleOnChange}
                            value={formData.title}
                            placeholder="Enter a catchy title..."
                            className="py-6 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="category" className="text-base">Category (Optional)</Label>
                        <Input
                        
                            id="category"
                            onChange ={handleOnChange}
                            placeholder="e.g. Technology, Lifestyle, Food"
                            className="border-gray-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content" className="text-base">Content</Label>
                        <Textarea
                            onChange = {handleOnChange}
                            value={value}
                            id="content"
                            placeholder="Write your story here..."
                            className="min-h-[300px] text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 resize-none p-4"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-3 pt-6 border-t bg-gray-50/50">
                    <Button variant="ghost" className="px-8 bg-white border">Save Draft</Button>
                    <Button className="px-8 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Publish Post
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AddBlog;