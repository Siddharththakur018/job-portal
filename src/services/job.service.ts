import api from "../client/client";
import type { Job } from "../types/job";

export const createJob = async (jobData: Partial<Job>) => {
  const { data } = await api.post("/jobs/create-job", jobData);
  return data;
};

export const deleteJob = async (id: string) => {
  const { data } = await api.delete(`/delete-job/${id}`);
  return data;
};

export const updateJob = async (id: string, jobData: Partial<Job>) => {
  const { data } = await api.patch(`/update-job/${id}`, jobData);
  return data;
};

export const getAllJobs = async (): Promise<Job[]> => {
  const { data } = await api.get("/jobs/all-jobs");
  return data;
};

export const getMyJobs = async (id: string) => {
  const { data } = await api.get(`/my-job/${id}`);
  return data;
};

export const getStats = async () => {
  const { data } = await api.get("/stats");
  return data;
};
