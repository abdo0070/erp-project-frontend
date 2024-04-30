import React from 'react'
import Job from './Job';
import { jobsData } from '../../api/data';

const Jobs = () => {
  const posts = jobsData;
  return (
    <div className="min-h-screen flex flex-col gap-2">
      {posts.map((c) => {
        return <Job post={c} />;
      })}
    </div>
  );
}

export default Jobs