// utils/api.js
// URL backend
const API_BASE_URL = "http://localhost:5000/api"; 

export const fetchCustomers = async () => {
  const res = await fetch(`${API_BASE_URL}/customers`);
  return res.json();
};

export const fetchSummary = async () => {
  const res = await fetch(`${API_BASE_URL}/customers/summary`);
  return res.json();
};
