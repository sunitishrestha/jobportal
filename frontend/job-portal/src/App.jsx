// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import { Toaster } from "react-hot-toast";
// import ProtectedRoutes from "./routes/ProtectedRoutes";
// import LandingPages from "./pages/Landingpage/components/LandingPages";
// import Login from "./pages/Auth/Login";
// import Signup from "./pages/Auth/Signup";

// import JobSeekersDashboard from "./pages/JobSeeker/JobSeekerDashboard";
// import JobDetails from "./pages/JobSeeker/JobDetails";
// import SavedJobs from "./pages/JobSeeker/SaveJobs";
// import UserProfile from "./pages/JobSeeker/UserProfile";

// import EmployerDashboard from "./pages/Employer/EditProfileDetails";
// import JobPostingForm from "./pages/Employer/JobPostingForm";
// import ManageJobs from "./pages/Employer/ManageJobs";
// import ApplicantViewers from "./pages/Employer/ApplicationViewers";
// import EmployerProfilePage from "./pages/Employer/EmployerProfilePage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* public */}
//         <Route path="/" element={<LandingPages />} />
//         <Route path="/landingpage" element={<LandingPages />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         <Route path="/find-jobs" element={<JobSeekersDashboard />} />
//         <Route path="/job/:jobId" element={<JobDetails />} />
//         <Route path="/saved-job" element={<SavedJobs />} />
//         <Route path="/profile" element={<UserProfile />} />

//         {/* protected */}
//         <Route element={<ProtectedRoutes requiredRole="employer" />}>
//           <Route path="/employer-dashboard" element={<EmployerDashboard />} />
//           <Route path="/post-job" element={<JobPostingForm />} />
//           <Route path="/manage-jobs" element={<ManageJobs />} />
//           <Route path="/applicants" element={<ApplicantViewers />} />
//           <Route path="/company-profile" element={<EmployerProfilePage />} />
//         </Route>

//         {/* catch all */}
//         <Route path="*" element={<Navigate to="/landingpage" />} />
//       </Routes>

//       <Toaster
//         toastOptions={{
//           style: { fontSize: "13px" },
//         }}
//       />
//     </Router>
//   );
// };

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LandingPages from "./pages/Landingpage/components/LandingPages";
// import Login from "./pages/Auth/Login";
// import Signup from "./pages/Auth/Signup";

// import JobSeekerDashboard from "./pages/JobSeeker/JobSeekerDashboard";
// import JobDetails from "./pages/JobSeeker/JobDetails";
// import SaveJobs from "./pages/JobSeeker/SaveJobs";
// import UserProfile from "./pages/JobSeeker/UserProfile";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import EditProfileDetails from "./pages/Employer/EditProfileDetails";
// import JobPostingForm from "./pages/Employer/JobPostingForm";
// import ManageJobs from "./pages/Employer/ManageJobs";
// import ApplicationViewers from "./pages/Employer/ApplicationViewers";
// import EmployerProfilePage from "./pages/Employer/EmployerProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPages />} />
        <Route path="/landingpage" element={<LandingPages />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/find-jobs" element={<JobSeekerDashboard />} />
        <Route path="/job/:jobId" element={<JobDetails />} />
        <Route path="/saved-job" element={<SaveJobs />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* protected routes */}
        {/* <Route element={<ProtectedRoute requiredRole="employer" />}>
          <Route path="/employer-dashboard" element={<EditProfileDetails />} />
          <Route path="/post-job" element={<JobPostingForm />} />
          <Route path="/manage-jobs" element={<ManageJobs />} />
          <Route path="/applicants" element={<ApplicationViewers />} />
          <Route path="/company-profile" element={<EmployerProfilePage />} />
        </Route>  */}

        {/* fallback */}
        <Route path="*" element={<Navigate to="/landingpage" />} />
      </Routes>
    </Router>
  );
};

export default App;
