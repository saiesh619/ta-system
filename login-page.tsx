import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from 'next/link'
import { BookOpen, Home, HelpCircle, Mail, Lock, Eye, EyeOff, LogIn, UserCircle, AlertCircle } from 'lucide-react'

export default function Component() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please fill in all fields')
    } else if (!email.includes('@')) {
      setError('Please enter a valid email address')
    } else {
      // Here you would typically handle the login logic
      console.log('Login attempted')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-100 to-orange-200">
      <header className="bg-orange-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <BookOpen className="w-8 h-8" />
            <div>
              <span className="font-bold text-xl">UF CISE</span>
              <span className="text-xl ml-2">TA Assignment System</span>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-4 sm:space-x-6">
              <li>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="#" className="flex items-center hover:text-orange-200 transition-colors duration-200">
                        <Home className="w-5 h-5 mr-1" />
                        <span className="hidden sm:inline">Home</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Go to Home</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="#" className="flex items-center hover:text-orange-200 transition-colors duration-200">
                        <BookOpen className="w-5 h-5 mr-1" />
                        <span className="hidden sm:inline">Open Position</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Open Positions</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="#" className="flex items-center hover:text-orange-200 transition-colors duration-200">
                        <HelpCircle className="w-5 h-5 mr-1" />
                        <span className="hidden sm:inline">Helpdesk</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Get Help</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-12 px-4">
        <Card className="max-w-md mx-auto bg-white/90 backdrop-blur-sm shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-orange-800">Sign in</CardTitle>
            <CardDescription className="text-center text-orange-600">
              Connecting Students and Professors for Academic Success
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-orange-800">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-orange-500" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    className="pl-10 border-orange-300 focus:border-orange-500 focus:ring-orange-500" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-orange-800">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-orange-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="pl-10 border-orange-300 focus:border-orange-500 focus:ring-orange-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-orange-600 hover:text-orange-800 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-200" type="submit">
                <LogIn className="mr-2 h-4 w-4" /> Sign in
              </Button>
            </form>
            <div className="text-center text-orange-800">OR</div>
            <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-100 transition-colors duration-200">
              <UserCircle className="mr-2 h-4 w-4" /> Login Using Gator ID
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="#" className="text-sm text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200">
              Forgot Password?
            </Link>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-orange-600 mt-12 py-6 text-center text-white">
        <div className="container mx-auto">
          <p className="text-lg font-semibold">University of Florida</p>
          <p className="text-sm mt-2">© 2024 UF CISE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}