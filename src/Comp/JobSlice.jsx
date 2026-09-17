import { createSlice } from "@reduxjs/toolkit";
const jobs = [
  {
    id: 1,
    company: "TCS",
    role: "Software Developer",
    location: "Ahmedabad",
    status: "Applied",
    date: "2026-09-15"
  },
  {
    id: 2,
    company: "Infosys",
    role: "React Developer",
    location: "Pune",
    status: "Interview",
    date: "2026-09-14"
  },
  {
    id: 3,
    company: "Wipro",
    role: "Java Developer",
    location: "Bangalore",
    status: "Applied",
    date: "2026-09-13"
  },
  {
    id: 4,
    company: "HCLTech",
    role: "Full Stack Developer",
    location: "Noida",
    status: "Rejected",
    date: "2026-09-12"
  },
  {
    id: 5,
    company: "Accenture",
    role: "Frontend Developer",
    location: "Mumbai",
    status: "Interview",
    date: "2026-09-11"
  },
  {
    id: 6,
    company: "Capgemini",
    role: "Backend Developer",
    location: "Pune",
    status: "Applied",
    date: "2026-09-10"
  },
  {
    id: 7,
    company: "Deloitte",
    role: "Software Engineer",
    location: "Hyderabad",
    status: "Selected",
    date: "2026-09-09"
  },
  {
    id: 8,
    company: "IBM",
    role: "Data Analyst",
    location: "Bangalore",
    status: "Applied",
    date: "2026-09-08"
  },
  {
    id: 9,
    company: "Cognizant",
    role: "Full Stack Developer",
    location: "Chennai",
    status: "Interview",
    date: "2026-09-07"
  },
  {
    id: 10,
    company: "Tech Mahindra",
    role: "Web Developer",
    location: "Ahmedabad",
    status: "Rejected",
    date: "2026-09-06"
  },
];
const JobSlice = createSlice({
  name: "JobApp",
  initialState: {
    jobs: jobs,
    job: []
  },
  reducers: {
    Addjob: (state, action) => {
      state.job.push(action.payload);
    },
    deletejob: (state, action) => {
      state.job = state.job.filter((item) => {
        return item.id !== action.payload.id;
      })
    }
  }
})
export default JobSlice.reducer;
export const { Addjob, deletejob } = JobSlice.actions;