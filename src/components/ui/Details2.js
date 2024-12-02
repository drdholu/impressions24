import React from 'react';

const Details2 = () => (
  <div className="m-2 bg-gray-50 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="p-4 mb-6 bg-white rounded-lg shadow-md sm:p-6 sm:mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">Round Details</h2>
        <div className="space-y-6 text-sm text-gray-600 sm:text-base">
          <div>
            <h3 className="text-lg font-semibold text-red-500">Round 1: Fast and Curious - COEPians Brain Drift</h3>
            <p><strong>Duration:</strong> 30 minutes</p>
            <p><strong>Format:</strong> "Coep mein aa toh gaye , par kya COEP ko acchese jante ho!" This an online quiz testing your knowlegde about COEP. The top 30 scorers will be selected for the next round
            .</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-500">Round 2: Discuss Deewane - Voice your Vision</h3>
            <p><strong>Duration:</strong> 40-50 mins
            </p>
            <p><strong>Format:</strong> Baatein karte hai, gappe ladate hai, tumhare vichaar sunte hai. Selected 30 participants will be divided into groups and will be a part of an open ended group discussion on various fun  interesting topics. Top 10 participants will be selected for round 3.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-500">Round 3: Slay the Stage - Performance that WOWS!</h3>
            <p><strong>Duration:</strong> 2.5 - 3hrs</p>
            <p><strong>Format:</strong> Talent dikhao apna, pura karo best fresher banne ka sapna. This is a talent showcase round in which the top 10 selected participants from round 2 will perform. Only 1 boy and 1 girl will get the crown of Mr. and Ms. Impressions</p>
              {/* <li>Additionally, 2 wild card entries will be selected to join.</li> */}
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Details2;