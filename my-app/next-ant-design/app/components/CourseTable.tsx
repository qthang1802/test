import React from "react";



function CourseTable() {
    const courses = [
        { name: "Course 1", duration: "3 months", level: "Beginner", status: "In Progress" },
        { name: "Course 2", duration: "6 months", level: "Intermediate", status: "Completed" },
        { name: "Course 3", duration: "4 months", level: "Advanced", status: "Not Started" },
        { name: "Course 4", duration: "2 months", level: "Beginner", status: "In Progress" },
        { name: "Course 5", duration: "5 months", level: "Intermediate", status: "Completed" },
        { name: "Course 6", duration: "1 month", level: "Advanced", status: "Not Started" },
        { name: "Course 7", duration: "3 months", level: "Beginner", status: "In Progress" },
        { name: "Course 8", duration: "6 months", level: "Intermediate", status: "Completed" },
        { name: "Course 9", duration: "4 months", level: "Advanced", status: "Not Started" },
        { name: "Course 10", duration: "2 months", level: "Beginner", status: "In Progress" },
    ];
    const getStatusColor = (status: string) => {
        switch (status) {
          case "In Progress":
            return "text-yellow-500"; // Yellow for "In Progress"
          case "Completed":
            return "text-green-500"; // Green for "Completed"
          case "Not Started":
            return "text-red-500"; // Red for "Not Started"
          default:
            return "text-gray-500"; // Default gray for unknown statuses
        }
      };

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 table-fixed">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Course Name</th>
              <th className="px-4 py-2 border-b">Duration</th>
              <th className="px-4 py-2 border-b">Level</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-center">{course.name}</td>
                <td className="px-4 py-2 border-b text-center">{course.duration}</td>
                <td className="px-4 py-2 border-b text-center" >{course.level}</td>
                <td className="px-4 py-2 border-b text-center">
                    <span className={getStatusColor(course.status)}>{course.status}</span>
                </td>
                <td className="px-4 py-2 border-b text-center">
                    <button className="text-blue-500 hover:underline">View</button>
                    <button className="text-red-500 hover:underline ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
export default CourseTable;
