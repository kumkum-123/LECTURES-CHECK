import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    PieChart,
    Pie,
    BarChart,
    Bar,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis
} from 'recharts';
import { Link } from 'react-router-dom';

const FileUpload = () => {
    const [similarity, setSimilarity] = useState(null);
    const [loading, setLoading] = useState(false);

    // Data for the pie chart and bar graph
    const pieChartData = [
        { name: 'Similarity', value: similarity },
        { name: 'Difference', value: similarity !== null ? 100 - similarity : 0 }
    ];

    const barChartData = [
        { name: 'Similarity', value: similarity },
        { name: 'Difference', value: similarity !== null ? 100 - similarity : 0 }
    ];

    // Custom colors for charts
    const colors = ['#0088FE', '#00C49F']; // You can add more colors if needed

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulate API call or fetch data here
        setLoading(true);  // Start loading
        try {
            // Simulate API response (replace with actual API call)
            setTimeout(() => {
                const randomSimilarity = Math.floor(Math.random() * 100); // Simulate similarity percentage
                setSimilarity(randomSimilarity);
            }, 2000); // Simulate loading time

        } catch (error) {
            console.error('Error uploading files:', error);
        } finally {
            setLoading(false);  // End loading
        }
    };

    // UseEffect hook to show alert when similarity is updated
    useEffect(() => {
        if (similarity !== null && similarity < 70) {
            alert('you may have uploaded wrong files , please  upload correct files');
        }
    }, [similarity]);

    return (
        <div className="page-container">
            <div className="upload-container">
                <div className="upload-form">
                    <h2>Comparison</h2>
                    {/* Form to handle file uploads */}
                    <form onSubmit={handleSubmit}>
                        <button
                            type="submit"
                            style={{
                                display: 'block',
                                margin: '0 auto',
                                backgroundColor: ' #084c94',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                            disabled={loading}
                        >
                             Compare
                        </button>
                    </form>
                    {/* Link to navigate to the next page */}
                    <div style={{ marginTop: "20px" }}>
                        <Link to="/homescreen" className="btn btn-secondary">
                            Next
                        </Link>
                    </div>
                </div>
                {/* Show loading indicator if loading */}
                {loading && <p>Loading...</p>}
                {/* Render charts and percentage when similarity is not null */}
                {similarity !== null && (
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <p>Similarity: {similarity}%</p>
                        {/* Pie Chart */}
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieChartData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    label
                                    labelLine={false}
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Bar Chart */}
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barChartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill={colors[0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
