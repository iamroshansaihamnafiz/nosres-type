import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuggHeader from "./Components/Header/SuggHeader";

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Register = lazy(() => import('./Pages/Register'));
const Login = lazy(() => import('./Pages/Login'));
const DashboardPage = lazy(() => import('./Components/DashboardPage/DashboardPage'));
const PersonalInfo = lazy(() => import('./Pages/PersonalInfo'));
const Accounts = lazy(() => import('./Pages/Accounts'));
const Jobs = lazy(() => import('./Pages/Jobs'));
const UserDetails = lazy(() => import('./Pages/UserDetails'));
const Hiring = lazy(() => import('./Pages/Hiring'));
const Blog = lazy(() => import('./Pages/Blog'));
const BlogDetail = lazy(() => import('./Pages/BlogDetail'));
const Legal = lazy(() => import('./Pages/Legal'));
const Support = lazy(() => import('./Pages/Support'));
const SupportProcess = lazy(() => import('./Pages/SupportProcess'));
const Business = lazy(() => import('./Pages/Business'));
const Investors = lazy(() => import('./Pages/SiteA/Investors'));
const Contact = lazy(() => import('./Pages/SiteA/Contact'));
const Marketplace = lazy(() => import('./Pages/SiteA/Marketplace'));
const Pay = lazy(() => import('./Pages/SiteA/Pay'));
const Logistic = lazy(() => import('./Pages/SiteA/Logistic'));
const Telecom = lazy(() => import('./Pages/SiteA/Telecom'));
const Company = lazy(() => import('./Pages/SiteA/Company'));
const NosresInvite = lazy(() => import('./Pages/SiteA/NosresInvite'));
const Affiliat = lazy(() => import('./Pages/SiteA/Affiliat'));
const Verification = lazy(() => import('./Pages/SiteA/Verification'));
const Proposal = lazy(() => import('./Pages/SiteA/Proposal'));
const Sitemap = lazy(() => import('./Pages/SiteA/Sitemap'));
const SearchResult = lazy(() => import('./Pages/SearchResult'));
const NoSearch = lazy(() => import('./Pages/NoSearch'));

function App() {
    return (
        <>
            <BrowserRouter>
                <Suspense>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/dashboard" element={<DashboardPage/>}/>
                        <Route path="/personal-info" element={<PersonalInfo/>}/>
                        <Route path="/accounts" element={<Accounts/>}/>
                        <Route path="/jobs" element={<Jobs/>}/>
                        <Route path="/user-details" element={<UserDetails/>}/>
                        <Route path="/hiring" element={<Hiring/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/blog-details" element={<BlogDetail/>}/>
                        <Route path="/legal" element={<Legal/>}/>
                        <Route path="/support" element={<Support/>}/>
                        <Route path="/support-process" element={<SupportProcess/>}/>
                        <Route path="/business" element={<Business/>}/>
                        <Route path="/search-result" element={<SearchResult/>}/>
                        <Route path="/no-search" element={<NoSearch/>}/>
                        {/* Site A */}
                        <Route path="/sitea-investors" element={<Investors/>}/>
                        <Route path="/sitea-contact" element={<Contact/>}/>
                        <Route path="/sitea-about" element={<About/>}/>
                        <Route path="/sitea-marketplace" element={<Marketplace/>}/>
                        <Route path="/sitea-pay" element={<Pay/>}/>
                        <Route path="/sitea-logistic" element={<Logistic/>}/>
                        <Route path="/sitea-telecom" element={<Telecom/>}/>
                        <Route path="/sitea-company" element={<Company/>}/>
                        <Route path="/sitea-nosresinvite" element={<NosresInvite/>}/>
                        <Route path="/sitea-affiliate" element={<Affiliat/>}/>
                        <Route path="/sitea-verification" element={<Verification/>}/>
                        <Route path="/sitea-proposal" element={<Proposal/>}/>
                        <Route path="/sitea-sitemap" element={<Sitemap/>}/>
                        <Route path="/sitea-sugg-header" element={<SuggHeader/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
