"use client"

import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUpload } from "@/components/ui/file-upload"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"
import mammoth from "mammoth"
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import styled from 'styled-components'
// import { Configuration, OpenAIApi } from "openai"; // Commented out OpenAI imports

// Define a styled component for the uploaded content
const UploadedContent = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.25em;
  }

  h4 {
    font-size: 1.125em;
  }

  p {
    margin: 0.5em 0;
  }

  a {
    color: blue;
    text-decoration: underline;
  }
`;

// Dynamically import Quill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Initialize OpenAI
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure you have your API key set in your environment
// });
// const openai = new OpenAIApi(configuration); // Corrected initialization

export function JobDescriptionEditor() {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [editorContent, setEditorContent] = useState<string>("");
  const [formattedContent, setFormattedContent] = useState<string>(""); // State for formatted content

  const handleFileSelect = async (file: File) => {
    try {
      const content = await readFileContent(file);
      setFileContent(content);
      setEditorContent(content); // Set the content for the editor
      toast({
        title: "File uploaded successfully",
        description: `Uploaded ${file.name}`,
      });

      // Call OpenAI to process the content
      // const parsedContent = await processWithOpenAI(content);
      // setFormattedContent(parsedContent); // Set the parsed content
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your file.",
        variant: "destructive",
      });
    }
  };

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const arrayBuffer = event.target?.result as ArrayBuffer;
          const { value } = await mammoth.convertToHtml({ arrayBuffer });
          resolve(value);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };

  // const processWithOpenAI = async (content: string): Promise<string> => {
  //   try {
  //     const response = await openai.createChatCompletion({ // Updated to createChatCompletion
  //       model: "gpt-3.5-turbo", // Choose the appropriate model
  //       messages: [{ role: "user", content: `Extract relevant information from the following document:\n\n${content}` }],
  //       max_tokens: 150, // Adjust as needed
  //     });
  //     return response.data.choices[0].message.content.trim(); // Return the parsed content
  //   } catch (error) {
  //     console.error("Error processing with OpenAI:", error);
  //     return "Error processing content"; // Fallback message
  //   }
  // };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Create Job Description</h2>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Generate
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Original content</h3>
              <p className="text-sm text-muted-foreground">
                Upload a file or create content from scratch to get started
              </p>
            </div>
            <FileUpload
              onFileSelect={handleFileSelect}
              accept={{
                "application/pdf": [".pdf"],
                "application/msword": [".doc"],
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
                "text/plain": [".txt"],
              }}
            />
            {fileContent && (
              <div className="mt-4 p-2 border rounded-md">
                {/* Custom Toolbar */}
                <div>
                  <div id="toolbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <select className="ql-font">
                      <option value="sans-serif">Sans Serif</option>
                      <option value="serif">Serif</option>
                      <option value="monospace">Monospace</option>
                    </select>
                    <select className="ql-size">
                      <option value="small">Small</option>
                      <option value="normal" selected>Normal</option>
                      <option value="large">Large</option>
                      <option value="huge">Huge</option>
                    </select>
                    <button className="ql-bold" />
                    <button className="ql-italic" />
                    <button className="ql-underline" />
                    <button className="ql-strike" />
                    <button className="ql-list" value="ordered" />
                    <button className="ql-list" value="bullet" />
                    <button className="ql-link" />
                    <button className="ql-image" />
                    <button className="ql-clean" />
                  </div>
                </div>
                <ReactQuill
                  value={editorContent}
                  onChange={setEditorContent}
                  className="h-40"
                  modules={{
                    toolbar: {
                      container: "#toolbar",
                    },
                  }}
                />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Formatted content</h3>
              <p className="text-sm text-muted-foreground">Preview the job description for export</p>
            </div>
            <div className="formatted-content">
              {formattedContent ? (
                <p>{formattedContent}</p> // Display the parsed content
              ) : (
                <p>No content yet</p>
              )}
            </div>
            <Tabs defaultValue="location">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="summary">Job summary</TabsTrigger>
                <TabsTrigger value="description">Job description</TabsTrigger>
                <TabsTrigger value="title">Job title</TabsTrigger>
                <TabsTrigger value="salary">Salary</TabsTrigger>
                <TabsTrigger value="working">Working preferences</TabsTrigger>
              </TabsList>
              <TabsContent
                value="location"
                className="h-[400px] flex items-center justify-center text-muted-foreground"
              >
                No content yet
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Move buttons here, outside of the card layout */}
      <div className="flex justify-between mt-6">
        <Button variant="outline">← Previous section</Button>
        <Button variant="outline">Next section →</Button>
      </div>
    </div>
  );
}