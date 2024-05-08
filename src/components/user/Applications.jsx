import React from 'react'
import Application from './Application';
import { applicationsData } from '../../api/data';
import Loading from '../Loading';

const Applications = () => {
  const posts = applicationsData;
  return (
    <div className="min-h-screen flex flex-col gap-2">
            {
      posts.map((c) => {
        return <Application post={c} />;
      })}
    </div>
  );
}

export default Applications