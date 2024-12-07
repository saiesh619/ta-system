import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { BookmarkIcon, ShareIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-900">UF CISE</span>
              </div>
              <nav className="ml-6 flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Search</a>
                <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Position</a>
                <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Application Status</a>
                <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Profile</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap gap-4">
              <Input className="flex-grow" placeholder="Search by keyword" />
              <Select>
                <option>Discipline</option>
              </Select>
              <Select>
                <option>Sort by: Most relevant</option>
                <option>Most recent</option>
              </Select>
              <Button>Find Jobs</Button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <p className="text-sm text-gray-500 mb-2">Showing 1-5 of 10 results</p>
                <Card className="p-4 mb-4">
                  <h3 className="text-lg font-semibold">Title</h3>
                  <p className="text-sm text-gray-500">Opening date: 3 hours ago</p>
                  <p className="mt-2">Short description</p>
                </Card>
                {/* Repeat the Card component for more job listings */}
              </div>

              <div className="w-full md:w-1/2">
                <Card className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Title</h2>
                    <div className="flex space-x-2">
                      <Button>Apply</Button>
                      <Button variant="outline"><BookmarkIcon className="w-4 h-4" /></Button>
                      <Button variant="outline"><ShareIcon className="w-4 h-4" /></Button>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">About Position</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">Position details go here...</p>
                    <p className="text-gray-600">More information about the job...</p>
                    <p className="text-gray-600">Requirements and qualifications...</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}