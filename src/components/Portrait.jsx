import { useState } from 'react';

// Put your photo at public/images/profile.jpg (portrait, roughly 4:5, 800px+ wide).
// Until that file exists, a placeholder with your initials is shown.
const PHOTO_SRC = '/images/profile.jpg';

export default function Portrait() {
  const [missing, setMissing] = useState(false);

  return (
    <div className="portrait">
      <div className="portrait-frame">
        {missing ? (
          <div className="portrait-fallback">
            <span className="portrait-initials gradient-text">RR</span>
            <span className="portrait-note">Photo coming soon</span>
          </div>
        ) : (
          <img
            src={PHOTO_SRC}
            alt="Portrait of Ryland Jocef Remigio"
            onError={() => setMissing(true)}
          />
        )}
      </div>
    </div>
  );
}
