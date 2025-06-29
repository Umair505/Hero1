import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobsPromise.then(data => {
      setJobs(data);
    });
  }, [jobsPromise]);
    return (
        <div>
            <h1>{jobs.length} Hot Jobs Available</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default HotJobs;