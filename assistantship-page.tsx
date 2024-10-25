import { useState } from 'react'
import { Search, Share2, BookOpen, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, User, HelpCircle, LogOut, FileText, Plus, Trash2, Calendar, Clock, Book, Upload } from 'lucide-react'

export default function AssistantshipPage() {
  const [selectedAssistantship, setSelectedAssistantship] = useState(null)

  const assistantships = [
    { id: 1, title: "Computer Science TA", department: "CISE", date: "3 hours ago", description: "Seeking a teaching assistant for Introduction to Programming course..." },
    { id: 2, title: "Data Structures Grader", department: "CISE", date: "1 day ago", description: "Looking for a grader for the Data Structures and Algorithms course..." },
    { id: 3, title: "AI Lab Assistant", department: "CISE", date: "2 days ago", description: "Assist in running lab sessions for the Artificial Intelligence course..." },
  ]

  return (
    <div className="min-h-screen bg-[#E6F3FF] text-gray-800">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            
            <span className="text-2xl font-bold text-gray-900">UF | CISE</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-[#0021A5] transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0021A5] transition-colors">Open Positions</a></li>
              <li className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-[#0021A5] transition-colors">
                  <span>Profile</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block border border-gray-200">
                  <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"><User className="w-4 h-4 mr-2" /> My Profile</a></li>
                  <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"><HelpCircle className="w-4 h-4 mr-2" /> Help Center</a></li>
                  <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"><LogOut className="w-4 h-4 mr-2" /> Log Out</a></li>
                  <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"><FileText className="w-4 h-4 mr-2" /> Application Status</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Teaching Assistantships</h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <Input className="flex-grow bg-white text-gray-800" placeholder="Search by keyword" />
          <Select>
            <SelectTrigger className="w-[180px] bg-white text-gray-800">
              <SelectValue placeholder="Department" />
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cise">Computer & Info Science & Engineering</SelectItem>
              <SelectItem value="ece">Electrical & Computer Engineering</SelectItem>
              <SelectItem value="mae">Mechanical & Aerospace Engineering</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] bg-white text-gray-800">
              <SelectValue placeholder="Sort by" />
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevant">Most relevant</SelectItem>
              <SelectItem value="recent">Most recent</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#FA4616] hover:bg-[#D64309] text-white">
            <Search className="mr-2 h-4 w-4" /> Find Assistantships
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Showing 1-3 of 10 results</h3>
            {assistantships.map(assistantship => (
              <Card key={assistantship.id} className="mb-4 cursor-pointer bg-white hover:bg-gray-100 transition-colors" onClick={() => setSelectedAssistantship(assistantship)}>
                <CardHeader>
                  <CardTitle className="text-[#FA4616]">{assistantship.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{assistantship.department} • {assistantship.date}</p>
                  <p className="mt-2 text-gray-800">{assistantship.description.substring(0, 100)}...</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            {selectedAssistantship && (
              <Card className="bg-[#F0F8FF] text-gray-800">
                <CardHeader>
                  <CardTitle className="text-[#FA4616]">{selectedAssistantship.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{selectedAssistantship.department} • {selectedAssistantship.date}</p>
                  <h4 className="font-semibold mb-2">About Assistantship</h4>
                  <p>{selectedAssistantship.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div>
                    <Button className="mr-2 bg-[#FA4616] hover:bg-[#D64309] text-white">Apply</Button>
                    <Button variant="outline" className="text-[#0021A5] border-[#0021A5] hover:bg-[#E6F3FF]">Save</Button>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-800 hover:text-[#FA4616]">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-[#0021A5] text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-[#FA4616]" />
            <span>University of Florida</span>
          </div>
          <p>&copy; 2024 UF CISE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}