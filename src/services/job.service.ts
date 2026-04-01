import api from "../client/client";
import type { Job } from "../types/job";
import type { CategoryStat } from "../types/categorystat";

export const createJob = async (jobData: Partial<Job>) => {
  const { data } = await api.post("/jobs/create-job", jobData);
  return data;
};

export const deleteJob = async (id: string) => {
  const { data } = await api.delete(`/jobs/delete-job/${id}`);
  return data;
};

export const updateJob = async (id: string, jobData: Partial<Job>) => {
  const { data } = await api.patch(`/jobs/update-job/${id}`, jobData);
  return data;
};

export const getAllJobs = async (): Promise<Job[]> => {
  const { data } = await api.get("/jobs/all-jobs");
  return data.job;
};

export const getMyJobs = async (id: string) => {
  const { data } = await api.get(`/jobs/my-job/${id}`);
  return data;
};

export const getStats = async () => {
  const { data } = await api.get("/jobs/stats");
  return data;
};

export const getCategoryStats = async (): Promise<CategoryStat[]> => {
  const {data} = await api.get("/jobs/category-stats");
  return data;
}