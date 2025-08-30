import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UniDashboard = () => {
  const totalProjects = 120;
  const activeStudents = 450;
  const pendingRequests = 30;

  const projectsGoal = 150;
  const studentsGoal = 500;
  const requestsGoal = 50;
  const [showcontentA, setshowcontentA] = React.useState(true);
  const projectCategories = [
    { name: "Research", value: 50, color: "#8884d8" },
    { name: "Development", value: 40, color: "#82ca9d" },
    { name: "Design", value: 30, color: "#ffc658" },
  ];

  const monthlyActiveStudents = [
    { month: "Jan", students: 300 },
    { month: "Feb", students: 350 },
    { month: "Mar", students: 400 },
    { month: "Apr", students: 420 },
    { month: "May", students: 450 },
    { month: "Jun", students: 470 },
  ];

  return (
    <div
      className=" m-5 border-white border-2 border-solid rounded overflow-hidden
     max-h-screen bg-blue-100 p-8 font-sans pad-border w-full flex flex-row justify-center"
    >
      <div className="w-1/2 bg-gray-100 border-white rounded">
        <div className="p-1 border-2 border-solid border-blue-400 rounded bg-blue m-2">
          <img
            src="https://www.shawu.edu/wp-content/uploads/2024/08/shaw-university-raleigh-nc-front-view-1200x675-1.jpg"
            alt="University"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="text-blue-900 flex items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Welcome, University Admin</h1>
        </div>
      </div>
      <div className=" m-2 w-1 bg-blue-300"></div>
      <button
        onClick={() => setshowcontentA(!showcontentA)}
        className="absolute top-10 right-10 bg-blue-400 text-white px-4 py-2 border-solid border-white rounded hover:bg-blue-400 transition"
      >
        {showcontentA ? "Show Charts" : "Show Cards"}
      </button>
      {/* <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
        University Dashboard
      </h1> */}
      {showcontentA ? (
        // Cards
        <div className="w-1/2 flex flex-wrap justify-center gap-5 mb-16">
          {/* Total Projects */}
          <div className="bg-white rounded-xl shadow-md p-6 w-1/3 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Total Projects
            </h3>
            <div className="w-28 h-28">
              <CircularProgressbar
                value={(totalProjects / projectsGoal) * 100}
                text={`${totalProjects}`}
                styles={buildStyles({
                  textColor: "#3b82f6",
                  pathColor: "#3b82f6",
                  trailColor: "#d1d5db",
                })}
              />
            </div>
            <p className="mt-3 text-gray-500">Goal: {projectsGoal}</p>
          </div>

          {/* Active Students */}
          <div className="bg-white rounded-xl shadow-md p-6 w-1/3 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Active Students
            </h3>
            <div className="w-28 h-28">
              <CircularProgressbar
                value={(activeStudents / studentsGoal) * 100}
                text={`${activeStudents}`}
                styles={buildStyles({
                  textColor: "#22c55e",
                  pathColor: "#22c55e",
                  trailColor: "#d1d5db",
                })}
              />
            </div>
            <p className="mt-3 text-gray-500">Goal: {studentsGoal}</p>
          </div>

          {/* Pending Requests */}
          <div className="bg-white rounded-xl shadow-md p-6 w-1/3 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Pending Requests
            </h3>
            <div className="w-28 h-28">
              <CircularProgressbar
                value={(pendingRequests / requestsGoal) * 100}
                text={`${pendingRequests}`}
                styles={buildStyles({
                  textColor: "#facc15",
                  pathColor: "#facc15",
                  trailColor: "#d1d5db",
                })}
              />
            </div>
            <p className="mt-3 text-gray-500">Goal: {requestsGoal}</p>
          </div>
        </div>
      ) : (
        // Charts
        <div className="ml-2 w-1/2 flex flex-wrap justify-center gap-2">
          {/* Bar Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xl">
            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              Monthly Active Students
            </h3>
            <div style={{ width: "80%", height: 200 }}>
              <ResponsiveContainer>
                <BarChart
                  data={monthlyActiveStudents}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Pie Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xl ">
            <h3 className="text-xl font-semibold mb-6 text-gray-700 ">
              Project Categories
            </h3>
            <div className="flex flex-row justify-center">
              <div style={{ width: "50%", height: 200 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={projectCategories}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      label
                    >
                      {projectCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white-200 border-solid b-2 rounded-xl shadow-md p-6 w-1/2 max-w-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Insights
                </h3>
                <p className="text-gray-600">
                  Research projects are leading with{" "}
                  <span className="font-bold">50%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniDashboard;
