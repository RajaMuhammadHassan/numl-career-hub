import { FeedbackSubmission, IssueType } from '../types';

const STORAGE_KEY = 'numl_career_hub_feedback';

export const feedbackService = {
  /**
   * Submit new feedback / report issue
   * Currently persists in LocalStorage and can easily be wired to Firebase / Supabase
   */
  async submitFeedback(data: {
    name?: string;
    email?: string;
    companyName?: string;
    issueType: IssueType;
    message: string;
  }): Promise<FeedbackSubmission> {
    const submission: FeedbackSubmission = {
      id: 'fb_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      name: data.name?.trim() || 'Anonymous',
      email: data.email?.trim() || undefined,
      companyName: data.companyName?.trim() || undefined,
      issueType: data.issueType,
      message: data.message.trim(),
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    // Save to LocalStorage
    try {
      const existing = feedbackService.getStoredFeedbacks();
      existing.unshift(submission);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch (error) {
      console.warn('Unable to persist feedback in localStorage', error);
    }

    // Future Cloud Integration Hook (Firebase / Supabase)
    // if (process.env.VITE_FIREBASE_ENABLED) {
    //   await db.collection('feedback').add(submission);
    // }

    return submission;
  },

  /**
   * Get all stored feedback submissions
   */
  getStoredFeedbacks(): FeedbackSubmission[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },
};
