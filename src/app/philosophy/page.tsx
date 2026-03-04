"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, Calendar, FileText, BookOpen, Monitor, Archive, Users, GraduationCap, Newspaper, Scale, BookUser, Globe, UserPlus, Trophy } from "lucide-react";
import { useState } from "react";

// ── DATA ─────────────────────────────────────────────────────────────────────

const programmes = [
  { degree: "Bachelor of Arts in Philosophy (B.A. Philosophy)", duration: "4-year undergraduate program" },
  { degree: "Postgraduate Diploma in Philosophy (PGD Philosophy)", duration: "1-year program" },
  { degree: "Master of Arts in Philosophy (M.A. Philosophy)", duration: "2-year postgraduate program" },
  { degree: "Doctor of Philosophy (Ph.D.) in Philosophy", duration: "3-5 year research program" },
  { degree: "Certificate Courses", duration: "in specialized areas of philosophy" },
];

const coreCourses = [
  "History of Ancient Philosophy", "Medieval Philosophy", "Modern Philosophy",
  "Contemporary Philosophy", "Logic and Critical Thinking", "Ethics and Moral Philosophy",
  "Metaphysics", "Epistemology", "Philosophy of Religion", "African Philosophy",
];

const electiveCourses = [
  "Philosophy of Science", "Political Philosophy", "Philosophy of Mind",
  "Environmental Ethics", "Bioethics", "Philosophy of Law",
  "Aesthetics", "Philosophical Anthropology",
];

const academicResources = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={55} height={55} fill="#1e2a78">
  <path d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z"/>
</svg>, title: "Academic Calendar", desc: "Access the current academic calendar with important dates for registration, lectures, examinations, and holidays.", link: "#", label: "View Calendar" },
  { icon: <FontAwesomeIcon icon={faFileLines} style={{ width: 55, height: 55, color: "#1e2a78" }} />, title: "Examination & Assessment", desc: "Guidelines, policies, and procedures for examinations, grading system, and academic assessment.", link: "#", label: "View Guidelines" },
  { icon: <BookOpen size={55} fill="#1e2a78" strokeWidth={0} />, title: "Student Handbook", desc: "Comprehensive guide to academic policies, student rights and responsibilities, and campus resources.", link: "#", label: "Download" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={55} height={55} fill="#1e2a78">
  <path d="M128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96zM160 160L480 160C497.7 160 512 174.3 512 192L512 352C512 369.7 497.7 384 480 384L160 384C142.3 384 128 369.7 128 352L128 192C128 174.3 142.3 160 160 160z"/>
</svg>, title: "E-Library", desc: "Access to digital resources, online databases, e-books, journals, and research materials.", link: "#", label: "Access E-Library" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={55} height={55} fill="#1e2a78">
  <path d="M64 128C64 110.3 78.3 96 96 96L544 96C561.7 96 576 110.3 576 128L576 160C576 177.7 561.7 192 544 192L96 192C78.3 192 64 177.7 64 160L64 128zM96 240L544 240L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 240zM248 304C234.7 304 224 314.7 224 328C224 341.3 234.7 352 248 352L392 352C405.3 352 416 341.3 416 328C416 314.7 405.3 304 392 304L248 304z"/>
</svg>, title: "Institutional Repository", desc: "Digital archive of research outputs, theses, dissertations, and publications by faculty and students.", link: "#", label: "Browse Repository" },
];

const researchItems = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={55} height={55} fill="#1e2a78">
  <path d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/>
</svg>, title: "Staff Publications", desc: "Explore the research contributions of our faculty members through their publications, conference papers, and scholarly works.", items: ["Journal Articles in International Publications", "Books and Book Chapters", "Conference Proceedings", "Research Monographs"], link: "#", label: "View Publications" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="60" height="60" fill="#1e2a78">
  <path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z"/>
</svg>, title: "Student Research Projects", desc: "Showcasing outstanding undergraduate and postgraduate research projects, theses, and dissertations.", items: ["Undergraduate Honors Theses", "Master's Dissertations", "Doctoral Theses", "Student Research Awards"], link: "#", label: "View Projects" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={55} height={55} fill="#1e2a78">
  <path d="M64 480L64 184C64 170.7 74.7 160 88 160C101.3 160 112 170.7 112 184L112 472C112 485.3 122.7 496 136 496C149.3 496 160 485.3 160 472L160 160C160 124.7 188.7 96 224 96L512 96C547.3 96 576 124.7 576 160L576 480C576 515.3 547.3 544 512 544L128 544C92.7 544 64 515.3 64 480zM224 192L224 256C224 273.7 238.3 288 256 288L320 288C337.7 288 352 273.7 352 256L352 192C352 174.3 337.7 160 320 160L256 160C238.3 160 224 174.3 224 192zM248 432C234.7 432 224 442.7 224 456C224 469.3 234.7 480 248 480L488 480C501.3 480 512 469.3 512 456C512 442.7 501.3 432 488 432L248 432zM224 360C224 373.3 234.7 384 248 384L488 384C501.3 384 512 373.3 512 360C512 346.7 501.3 336 488 336L248 336C234.7 336 224 346.7 224 360zM424 240C410.7 240 400 250.7 400 264C400 277.3 410.7 288 424 288L488 288C501.3 288 512 277.3 512 264C512 250.7 501.3 240 488 240L424 240z"/>
</svg>, title: "Journals & Articles", desc: "Access to academic journals, both internal and external, relevant to philosophical studies and related disciplines.", items: ["Augustinian Journal of Philosophy", "African Philosophical Review", "International Journal of Ethics", "Philosophy Today"], link: "#", label: "Browse Journals" },
  { icon:  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="55" height="55" fill="#1e2a78">
        <path d="M384 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L398.4 160C393.2 185.8 375.5 207.1 352 217.3L352 512L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L128 576C110.3 576 96 561.7 96 544C96 526.3 110.3 512 128 512L288 512L288 217.3C264.5 207 246.8 185.7 241.6 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L256 96C270.6 76.6 293.8 64 320 64C346.2 64 369.4 76.6 384 96zM439.6 384L584.4 384L512 259.8L439.6 384zM512 480C449.1 480 396.8 446 386 401.1C383.4 390.1 387 378.8 392.7 369L487.9 205.8C492.9 197.2 502.1 192 512 192C521.9 192 531.1 197.3 536.1 205.8L631.3 369C637 378.8 640.6 390.1 638 401.1C627.2 445.9 574.9 480 512 480zM126.8 259.8L54.4 384L199.3 384L126.8 259.8zM.9 401.1C-1.7 390.1 1.9 378.8 7.6 369L102.8 205.8C107.8 197.2 117 192 126.9 192C136.8 192 146 197.3 151 205.8L246.2 369C251.9 378.8 255.5 390.1 252.9 401.1C242.1 445.9 189.8 480 126.9 480C64 480 11.7 446 .9 401.1z"/>
      </svg>, title: "Research Ethics Policy", desc: "Comprehensive guidelines and policies governing ethical conduct in research activities at the Institute.", items: ["Research Integrity Guidelines", "Ethical Review Procedures", "Plagiarism Policy", "Data Management Guidelines"], link: "#", label: "View Policy" },
];

const academicServices = [
  { title: "Transcript Application", desc: "Request official academic transcripts for further studies, employment, or professional purposes.", link: "#", label: "Apply Now" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={55} height={55} fill="#1e2a78">
  <path d="M64 173.5L64 483.6C64 503 75.8 520.9 94.3 526.9C188.3 556.9 253.1 535.3 317.6 513.8C380 493 442 472.3 529.7 498.5C551.9 505.1 575.9 489.7 575.9 466.5L575.9 156.4C575.9 137 564.1 119.1 545.6 113.1C451.6 83.1 386.8 104.7 322.3 126.2C259.9 147 197.9 167.7 110.2 141.5C88 134.9 63.9 150.3 63.9 173.5zM320 432C267 432 224 381.9 224 320C224 258.1 267 208 320 208C373 208 416 258.1 416 320C416 381.9 373 432 320 432zM191.1 469.5C191.8 473.9 188.3 477.6 183.9 477.6C168.2 477.6 151.8 475.8 133.9 471.5C130.4 470.7 127.9 467.5 127.9 463.8L128 424C128 419.6 131.6 415.9 136 416.5C164.1 420 186.6 441.7 191.2 469.5zM512 418.6C512 423.6 507.4 427.4 502.5 426.6C487.1 424.1 472.3 422.7 458.1 422.3C453.2 422.2 449.4 417.8 450.9 413.1C458.2 389.4 478.9 371.7 504.1 368.5C508.5 368 512.1 371.6 512.1 376L512.1 418.6zM504 223.5C475.9 220 453.4 198.3 448.8 170.5C448.1 166.1 451.6 162.4 456 162.4C471.7 162.4 488.1 164.2 506 168.5C509.5 169.3 512 172.5 512 176.2L512 216.1C512 220.5 508.4 224.2 504 223.6zM181.9 217.7C186.8 217.8 190.6 222.2 189.1 226.9C181.8 250.6 161.1 268.3 135.9 271.5C131.5 272 127.9 268.4 127.9 264L127.9 221.4C127.9 216.4 132.5 212.6 137.4 213.4C152.8 215.9 167.6 217.3 181.8 217.7zM304 252C293 252 284 261 284 272C284 281.7 290.9 289.7 300 291.6L300 340L296 340C285 340 276 349 276 360C276 371 285 380 296 380L344 380C355 380 364 371 364 360C364 349 355 340 344 340L340 340L340 272C340 261 331 252 320 252L304 252z"/>
</svg>, title: "Tuition Fees & Payment", desc: "Information on tuition fees, payment schedules, and available payment options for students.", link: "#", label: "View Fees" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={55} height={55} fill="#1e2a78">
  <path d="M320 48C306.7 48 296 58.7 296 72L296 84L294.2 84C257.6 84 228 113.7 228 150.2C228 183.6 252.9 211.8 286 215.9L347 223.5C352.1 224.1 356 228.5 356 233.7C356 239.4 351.4 243.9 345.8 243.9L272 244C256.5 244 244 256.5 244 272C244 287.5 256.5 300 272 300L296 300L296 312C296 325.3 306.7 336 320 336C333.3 336 344 325.3 344 312L344 300L345.8 300C382.4 300 412 270.3 412 233.8C412 200.4 387.1 172.2 354 168.1L293 160.5C287.9 159.9 284 155.5 284 150.3C284 144.6 288.6 140.1 294.2 140.1L360 140C375.5 140 388 127.5 388 112C388 96.5 375.5 84 360 84L344 84L344 72C344 58.7 333.3 48 320 48zM141.3 405.5L98.7 448L64 448C46.3 448 32 462.3 32 480L32 544C32 561.7 46.3 576 64 576L384.5 576C413.5 576 441.8 566.7 465.2 549.5L591.8 456.2C609.6 443.1 613.4 418.1 600.3 400.3C587.2 382.5 562.2 378.7 544.4 391.8L424.6 480L312 480C298.7 480 288 469.3 288 456C288 442.7 298.7 432 312 432L384 432C401.7 432 416 417.7 416 400C416 382.3 401.7 368 384 368L231.8 368C197.9 368 165.3 381.5 141.3 405.5z"/>
</svg>, title: "Scholarship & Financial Aid", desc: "Information on available scholarships, bursaries, and financial assistance programs for students.", link: "#", label: "Learn More" },
];

const learningSupport = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={42} height={42} fill="#1e2a78">
  <path d="M320 216C368.6 216 408 176.6 408 128C408 79.4 368.6 40 320 40C271.4 40 232 79.4 232 128C232 176.6 271.4 216 320 216zM320 514.7L320 365.4C336.3 358.6 352.9 351.7 369.7 344.7C408.7 328.5 450.5 320.1 492.8 320.1L512 320.1L512 480.1L492.8 480.1C433.7 480.1 375.1 491.8 320.5 514.6L320 514.8zM320 296L294.9 285.5C248.1 266 197.9 256 147.2 256L112 256C85.5 256 64 277.5 64 304L64 496C64 522.5 85.5 544 112 544L147.2 544C197.9 544 248.1 554 294.9 573.5L307.7 578.8C315.6 582.1 324.4 582.1 332.3 578.8L345.1 573.5C391.9 554 442.1 544 492.8 544L528 544C554.5 544 576 522.5 576 496L576 304C576 277.5 554.5 256 528 256L492.8 256C442.1 256 391.9 266 345.1 285.5L320 296z"/>
</svg>, title: "Library Services", desc: "Comprehensive library services including book lending, reference assistance, research support, and study spaces.", items: ["Extensive collection of philosophy texts", "Digital resources and online databases", "Interlibrary loan services", "Research consultation with librarians"], link: "#", label: "Library Portal" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={60} height={60} fill="#1e2a78">
  <path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z"/>
</svg>, title: "General Studies (GST)", desc: "Interdisciplinary courses designed to provide students with a broad educational foundation and essential skills.", items: ["Use of English and Communication Skills", "Nigerian Peoples and Culture", "Entrepreneurship Studies", "Introduction to Computer Science"], link: "#", label: "GST Courses" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={42} height={42} fill="#1e2a78">
  <path d="M337.3 51C325.9 48.7 314.2 48.7 302.8 51L115.3 88.5C104.1 90.7 96 100.6 96 112C96 122.3 102.5 131.3 112 134.6L112 208L96.3 286.6C96.1 287.5 96 288.5 96 289.5C96 297.5 102.5 304.1 110.6 304.1L145.5 304.1C153.5 304.1 160.1 297.6 160.1 289.5C160.1 288.5 160 287.6 159.8 286.6L144 208L144 141.3L192 150.9L192 208C192 278.7 249.3 336 320 336C390.7 336 448 278.7 448 208L448 150.9L524.7 135.6C535.9 133.3 544 123.4 544 112C544 100.6 535.9 90.7 524.7 88.5L337.3 51zM320 288C275.8 288 240 252.2 240 208L400 208C400 252.2 364.2 288 320 288zM216.1 384.1C154.7 412.3 112 474.3 112 546.3C112 562.7 125.3 576 141.7 576L296 576L296 430L238.6 387C232.1 382.1 223.4 380.8 216 384.2zM344 576L498.3 576C514.7 576 528 562.7 528 546.3C528 474.3 485.3 412.3 423.9 384.2C416.5 380.8 407.8 382.1 401.3 387L343.9 430L343.9 576z"/>
</svg>, title: "Academic Advising", desc: "Personalized academic guidance and mentoring to help students navigate their educational journey successfully.", items: ["Course selection and registration assistance", "Academic progress monitoring", "Career guidance and planning", "Graduate school preparation"], link: "#", label: "Meet Advisors" },
  { icon:           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={42} height={42} fill="#1e2a78">
  <path d="M64 160C64 124.7 92.7 96 128 96L512 96C547.3 96 576 124.7 576 160L576 400L512 400L512 160L128 160L128 400L64 400L64 160zM0 467.2C0 456.6 8.6 448 19.2 448L620.8 448C631.4 448 640 456.6 640 467.2C640 509.6 605.6 544 563.2 544L76.8 544C34.4 544 0 509.6 0 467.2zM281 273L250 304L281 335C290.4 344.4 290.4 359.6 281 368.9C271.6 378.2 256.4 378.3 247.1 368.9L199.1 320.9C189.7 311.5 189.7 296.3 199.1 287L247.1 239C256.5 229.6 271.7 229.6 281 239C290.3 248.4 290.4 263.6 281 272.9zM393 239L441 287C450.4 296.4 450.4 311.6 441 320.9L393 368.9C383.6 378.3 368.4 378.3 359.1 368.9C349.8 359.5 349.7 344.3 359.1 335L390.1 304L359.1 273C349.7 263.6 349.7 248.4 359.1 239.1C368.5 229.7 383.7 229.7 393 239.1z"/>
</svg>, title: "ICT & E-Learning Support", desc: "Comprehensive technology support services to enhance teaching, learning, and research activities.", items: ["Learning Management System (LMS)", "Computer laboratories and Wi-Fi access", "Technical support and troubleshooting", "Digital literacy training"], link: "#", label: "IT Services" },
];

const alumniCards = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="55" height="55" fill="#1e2a78">
        <path d="M300.9 117.2L184.3 246.8C179.7 251.9 179.9 259.8 184.8 264.7C215.3 295.2 264.8 295.2 295.3 264.7L327.1 232.9C331.3 228.7 336.6 226.4 342 226C348.8 225.4 355.8 227.7 361 232.9L537.6 408L608 352L608 64L496 128L472.2 112.1C456.4 101.6 437.9 96 418.9 96L348.5 96C347.4 96 346.2 96 345.1 96.1C328.2 97 312.3 104.6 300.9 117.2zM148.6 214.7L255.4 96L215.8 96C190.3 96 165.9 106.1 147.9 124.1L32 256L32 608L176 472L188.4 482.3C211.4 501.5 240.4 512 270.3 512L286 512L279 505C269.6 495.6 269.6 480.4 279 471.1C288.4 461.8 303.6 461.7 312.9 471.1L353.9 512.1L362.9 512.1C382 512.1 400.7 507.8 417.7 499.8L391 473C381.6 463.6 381.6 448.4 391 439.1C400.4 429.8 415.6 429.7 424.9 439.1L456.9 471.1L474.4 453.6C483.3 444.7 485.9 431.8 482 420.5L344.1 283.7L329.2 298.6C279.9 347.9 200.1 347.9 150.8 298.6C127.8 275.6 126.9 238.7 148.6 214.6z"/>
      </svg>, title: "Alumni Association", desc: "Join our vibrant alumni community to stay connected, network, and contribute to the growth of the Institute.", link: "#", label: "Join Association" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={55} height={55} fill="#1e2a78">
  <path d="M285.7 368C384.2 368 464 447.8 464 546.3C464 562.7 450.7 576 434.3 576L77.7 576C61.3 576 48 562.7 48 546.3C48 447.8 127.8 368 226.3 368L285.7 368zM528 144C541.3 144 552 154.7 552 168L552 216L600 216C613.3 216 624 226.7 624 240C624 253.3 613.3 264 600 264L552 264L552 312C552 325.3 541.3 336 528 336C514.7 336 504 325.3 504 312L504 264L456 264C442.7 264 432 253.3 432 240C432 226.7 442.7 216 456 216L504 216L504 168C504 154.7 514.7 144 528 144zM256 312C189.7 312 136 258.3 136 192C136 125.7 189.7 72 256 72C322.3 72 376 125.7 376 192C376 258.3 322.3 312 256 312z"/>
</svg>, title: "Alumni Registration", desc: "Register as an alumnus to receive updates, invitations to events, and access to alumni benefits.", link: "#", label: "Register Now" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="55" height="55" fill="#1e2a78">
        <path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z"/>
      </svg>, title: "Success Stories", desc: "Read inspiring stories of our alumni who are making significant contributions in various fields.", link: "#", label: "View Stories" },
];

const notableAlumni = [
  { img: "ailogo.png", name: "Dr. Adebayo Johnson", role: "Senior Lecturer, University of Lagos", quote: '"My philosophy education at Augustinian Institute provided the critical thinking foundation for my academic career."' },
  { img: "/ailogo.png", name: "Chinwe Okoro", role: "Human Rights Lawyer", quote: '"The ethical training I received has been invaluable in my legal practice and advocacy work."' },
  { img: "/ailogo.png", name: "Rev. Fr. Michael Adeyemi", role: "Diocesan Priest & Educator", quote: '"The integration of faith and reason at Augustinian Institute shaped my ministry and educational approach."' },
];

// ── HELPERS ──────────────────────────────────────────────────────────────────

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-[28px] font-bold text-[#1e2a78] mb-3">{title}</h2>
      <div className="w-14 h-[3px] bg-[#1e2a78] rounded-full mx-auto" />
    </div>
  );
}

// Blue filled button
function BlueBtn({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="inline-block mt-5 bg-[#1a56db] hover:bg-[#1648c0] transition-colors text-white text-[14px] font-medium px-5 py-2 rounded-md">
      {label}
    </a>
  );
}

function AccordionItem({ title, children, isFirst, isLast }: { title: string; children: React.ReactNode; isFirst?: boolean; isLast?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`overflow-hidden border border-gray-200 ${isFirst ? "rounded-t-lg" : "-mt-px"} ${isLast && !open ? "rounded-b-lg" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${open ? "bg-[#1e2a78]" : "bg-[#eef0ff] hover:bg-[#e2e6ff]"}`}
      >
        <span className={`text-[15px] font-bold ${open ? "text-white" : "text-[#1e2a78]"}`}>{title}</span>
        <ChevronDown size={18} className={`transition-transform duration-200 ${open ? "rotate-180 text-white" : "text-[#1e2a78]"}`} />
      </button>
      {open && (
        <div className={`px-6 pb-6 pt-4 bg-white ${isLast ? "rounded-b-lg" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────────
export default function AcademicsPage() {
  return (
    <div className="w-full font-sans">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#757bb7] min-h-[400px] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #4a5fd8 0%, transparent 60%), radial-gradient(circle at 80% 50%, #4a5fd8 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-8">

          <h2
  className="text-[40px] font-[600] mb-4 text-center w-full lg:min-w-[800px]"
  style={{ animation: "slideUp 1.5s ease-out 0.3s forwards", opacity: 0 }}
>
  Academic Excellence at Augustinian Institute
</h2>
          <p className="text-[17px] text-white leading-relaxed"
           style={{ animation: "slideUp 1.5s ease-out 0.3s forwards", opacity: 0 }}>
            Nurturing minds, shaping futures through quality education and research</p>
        </div>
      </div>

      {/* ── DEPARTMENT OF PHILOSOPHY ─────────────────────────────────────── */}
      <section id="department" className="w-full bg-[#eef0ff] py-20">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Department of Philosophy" />
          <div className="bg-white rounded-2xl shadow-sm px-12 py-12">
            <div className="flex justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="52" height="52" fill="#1e2a78">
                <path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z"/>
              </svg>
            </div>
            <h3 className="text-[28px] font-[700] text-gray-900 text-center mb-7">Department Overview</h3>
            <div className="text-[16px] text-[#333333] font-[400] leading-7 space-y-4 mb-10">
              <p>The Department of Philosophy at Augustinian Institute is dedicated to the pursuit of wisdom, truth, and understanding through rigorous intellectual inquiry. Our programs are designed to develop critical thinking, ethical reasoning, and a deep appreciation for the philosophical traditions that have shaped human thought.</p>
              <p>Our faculty consists of distinguished scholars and practitioners who are committed to providing students with a comprehensive philosophical education that integrates theoretical knowledge with practical application.</p>
            </div>
            <div className="flex flex-col">
              <AccordionItem title="Academic Programmes" isFirst>
                <ul className="list-disc list-inside flex flex-col gap-2 mt-1">
                  {programmes.map((p, i) => (
                    <li key={i} className="text-[14px] text-gray-700">
                      <strong>{p.degree}</strong> - {p.duration}
                    </li>
                  ))}
                </ul>
              </AccordionItem>
              <AccordionItem title="Course Structure">
                <div className="grid md:grid-cols-2 gap-6 mt-2">
                  <div>
                    <h5 className="text-[14px] font-bold text-[#1e2a78] mb-3">Core Philosophy Courses</h5>
                    <ul className="flex flex-col gap-2">
                      {coreCourses.map((c, i) => (
                        <li key={i} className="flex items-center gap-2 text-[14px] text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-[#1e2a78] shrink-0" />{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-[#1e2a78] mb-3">Specialized Electives</h5>
                    <ul className="flex flex-col gap-2">
                      {electiveCourses.map((c, i) => (
                        <li key={i} className="flex items-center gap-2 text-[14px] text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-[#1e2a78] shrink-0" />{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem title="Admission Requirements" isLast>
                <div className="grid md:grid-cols-2 gap-6 mt-2">
                  <div>
                    <h5 className="text-[14px] font-bold text-[#1e2a78] mb-3">Undergraduate Program (B.A. Philosophy)</h5>
                    <ul className="flex flex-col gap-2">
                      {["Minimum of 5 credits in SSCE/GCE/O'Level including English and Mathematics", "JAMB UTME score of 150 and above", "Post-UTME screening exercise", "Direct Entry requirements: Two A'Level passes in relevant subjects"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[14px] text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-[#1e2a78] mt-[6px] shrink-0" />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-[#1e2a78] mb-3">Postgraduate Programs</h5>
                    <ul className="flex flex-col gap-2">
                      {[{ label: "PGD Philosophy:", text: "First degree in any discipline with a minimum of Third Class" }, { label: "M.A. Philosophy:", text: "First degree in Philosophy with a minimum of Second Class Lower" }, { label: "Ph.D. Philosophy:", text: "Master's degree in Philosophy with a minimum CGPA of 3.5" }].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[14px] text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-[#1e2a78] mt-[6px] shrink-0" /><span><strong className="text-[#1e2a78]">{item.label}</strong> {item.text}</span></li>
                      ))}
                    </ul>
                    <p className="mt-4 text-[13px] text-gray-500 bg-[#f4f6ff] rounded-lg p-3 leading-5"><strong>Note:</strong> All applicants must meet the general admission requirements of the Institute and may be required to participate in an interview process.</p>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMIC RESOURCES — white bg, #eef0ff cards, centered, 3+2 grid ── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Academic Resources" />
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {academicResources.slice(0, 3).map((r, i) => (
              <div key={i} className="bg-[#eef0ff] rounded-2xl px-8 py-10 flex flex-col items-center text-center">
                <div className="mb-4">{r.icon}</div>
                <h4 className="text-[28px] font-[700] text-gray-900 mb-3">{r.title}</h4>
                <p className="text-[16px] text-[#333333] font-[400] leading-6 flex-1">{r.desc}</p>
                <BlueBtn href={r.link} label={r.label} />
              </div>
            ))}
          </div>
          {/* Row 2: 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {academicResources.slice(3).map((r, i) => (
              <div key={i} className="bg-[#eef0ff] rounded-2xl px-8 py-10 flex flex-col items-center text-center">
                <div className="mb-4">{r.icon}</div>
               <h4 className="text-[28px] font-[700] text-gray-900 mb-3">{r.title}</h4>
                <p className="text-[16px] text-[#333333] font-[400] leading-6 flex-1">{r.desc}</p>
                <BlueBtn href={r.link} label={r.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH AND SCHOLARSHIP — #eef0ff bg, white cards, icon+title left ── */}
      <section className="w-full bg-[#eef0ff] py-20">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Research and Scholarship" />
          <div className="grid sm:grid-cols-2 gap-6">
            {researchItems.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-8 flex flex-col">
                <div className="mb-3">{r.icon}</div>
            <h4 className="text-[28px] font-[700] text-gray-900 mb-3">{r.title}</h4>
                <p className="text-[16px] text-[#333333] font-[400] leading-6 flex-1">{r.desc}</p>
                <ul className="flex flex-col gap-1 mt-3 mb-2 list-disc list-inside">
                  {r.items.map((item, j) => (
                    <li key={j} className="text-[16px]  text-[#333333] font-[400]">{item}</li>
                  ))}
                </ul>
                <div className="mt-auto"><BlueBtn href={r.link} label={r.label} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC SERVICES — white bg, #eef0ff cards, centered ── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Academic Services" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {academicServices.map((s, i) => (
              <div key={i} className="bg-[#eef0ff] rounded-2xl px-8 py-10 flex flex-col items-center text-center">
                <div className="mb-4">{s.icon}</div>
              <h4 className="text-[28px] font-[700] text-gray-900 mb-3">{s.title}</h4>
                <p className="text-[16px] text-[#333333] font-[400] leading-6 flex-1">{s.desc}</p>
                <BlueBtn href={s.link} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNING SUPPORT — #eef0ff bg, white cards, icon+title left ── */}
      <section className="w-full bg-[#eef0ff] py-20">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Learning Support" />
          <div className="grid sm:grid-cols-2 gap-6">
            {learningSupport.map((l, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-8 flex flex-col">
                <div className="mb-3">{l.icon}</div>
                <h4 className="text-[28px] font-[700] text-gray-900 mb-3">{l.title}</h4>
                <p className="text-[16px] text-[#333333] font-[400] leading-6 flex-1">{l.desc}</p>
                <ul className="flex flex-col gap-1 mt-3 mb-2 list-disc list-inside">
                  {l.items.map((item, j) => (
                    <li key={j} className="text-[16px] text-[#333333] font-[400]">{item}</li>
                  ))}
                </ul>
                <div className="mt-auto"><BlueBtn href={l.link} label={l.label} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALUMNI NETWORK — white bg, #eef0ff cards centered, blue Notable header ── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-[75px]">
          <SectionHeading title="Alumni Network" />

          {/* 3 action cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {alumniCards.map((a, i) => (
              <div key={i} className="bg-[#eef0ff] rounded-2xl px-8 py-10 flex flex-col items-center text-center">
                <div className="mb-4">{a.icon}</div>
                <h4 className="text-[28px] font-[700] text-gray-900 mb-3">{a.title}</h4>
                <p className="text-[16px] text-[#333333] font-[400] leading-6 flex-1">{a.desc}</p>
                <BlueBtn href={a.link} label={a.label} />
              </div>
            ))}
          </div>

          {/* Notable Alumni box */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            {/* Blue header bar */}
            <div className="bg-[#1a56db] px-6 py-3">
              <h3 className="text-white font-bold text-[16px]">Notable Alumni</h3>
            </div>
            {/* Alumni grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-x divide-gray-100 p-8">
              {notableAlumni.map((a, i) => (
                <div key={i} className="flex flex-col items-center text-center px-6">
                  <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-gray-200 mb-4">
                    <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-1">{a.name}</h4>
                  <p className="text-[13px] text-gray-500 mb-3">{a.role}</p>
                  <p className="text-[14px] text-gray-600 leading-6">{a.quote}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}