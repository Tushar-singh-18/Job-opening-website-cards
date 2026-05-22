import React from 'react'
import './index.css'
import Cards from './component/Cards'
import { Bookmark } from 'lucide-react'


export const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
      company: "Meta",
      datePosted: "2 days ago",
      post: "Senior Frontend Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$95/Hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
      company: "Apple",
      datePosted: "5 days ago",
      post: "iOS Software Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$85/Hr",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
      company: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$90/Hr",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
      company: "Netflix",
      datePosted: "3 days ago",
      post: "UI/UX Designer",
      tag1: "Part-time",
      tag2: "Senior Level",
      pay: "$75/Hr",
      location: "Los Angeles, USA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
      company: "Google",
      datePosted: "2 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$70/Hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      company: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Solutions Architect",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$110/Hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
      company: "OpenAI",
      datePosted: "6 days ago",
      post: "ML Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$130/Hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
      company: "Uber",
      datePosted: "3 weeks ago",
      post: "React Native Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$65/Hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
      company: "Spotify",
      datePosted: "10 days ago",
      post: "DevOps Engineer",
      tag1: "Remote",
      tag2: "Junior Level",
      pay: "$60/Hr",
      location: "Stockholm, Sweden"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
      company: "Adobe",
      datePosted: "1 month ago",
      post: "Product Designer",
      tag1: "Part-time",
      tag2: "Junior Level",
      pay: "$55/Hr",
      location: "Noida, India"
    }
  ]

  return (
    <div className='parent'>
      {jobOpenings.map(function (job) {
        return <Cards
          key={job.company}
          logo={job.brandLogo}
          company={job.company}
          date={job.datePosted}
          post={job.post}
          tag1={job.tag1}
          tag2={job.tag2}
          pay={job.pay}
          location={job.location}
        />
      })}
    </div>
  )
}

export default App;