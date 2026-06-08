/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  impact: string;
  icon: string;
}

export interface Publication {
  id: string;
  title: string;
  subtitle?: string;
  type: 'principal' | 'secundaria';
  description: string;
  topics: string[];
  badge?: string;
  status: string;
}

export interface EducationSection {
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    highlights: string[];
  }[];
}

export interface TechSection {
  title: string;
  description: string;
  skills: {
    category: string;
    items: string[];
    icon: string;
  }[];
}

export interface ResultItem {
  metric: string;
  label: string;
  description: string;
}
