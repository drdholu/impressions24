import React from 'react';

const Details2 = () => (
  <div className="px-4 py-6 sm:py-10 bg-gray-50 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="p-4 mb-6 bg-white rounded-lg shadow-md sm:p-6 sm:mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">Round Details</h2>
        <div className="space-y-6 text-sm text-gray-600 sm:text-base">
          <div>
            <h3 className="text-lg font-semibold text-red-500">Round 1: Online Quiz</h3>
            <p><strong>Duration:</strong> 30 minutes</p>
            <p><strong>Format:</strong> An online quiz featuring general knowledge questions related to COEP.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-500">Round 2: Group Discussion &amp; Debate</h3>
            <p><strong>Format:</strong>The selected 30 participants would be asked to send videos of their talents that they are going to perform. Open ended discussion between the selected participants on different various fun topics.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-500">Round 3: Talent Show</h3>
            <p><strong>Format:</strong></p>
            <ul className="list-disc list-inside">
              <li>The top 10 participants from Round 2 will qualify for this round.</li>
              {/* <li>Additionally, 2 wild card entries will be selected to join.</li> */}
            </ul>
            <p><strong>Outcome:</strong></p>
            <p>Two winners will be chosen:</p>
            <ol className="list-decimal list-inside">
              <li>Mr. Impressions</li>
              <li>Ms. Impressions</li>
              {/* <li>Best Performance/People's Choice Award</li> */}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Details2;