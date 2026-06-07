import { useState } from 'react';
import { Video, VideoOff, Mic, MicOff, PhoneOff, Monitor } from 'lucide-react';

export default function VideoCallPage() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Video Call</h1>
      <div className="bg-gray-900 rounded-xl h-96 flex items-center justify-center mb-6">
        {isCallActive ? (
          <p className="text-white text-xl">Call in progress...</p>
        ) : (
          <p className="text-gray-400 text-xl">Start a call to connect</p>
        )}
      </div>
      <div className="flex justify-center gap-4">
        <button onClick={() => setIsMuted(!isMuted)}
          className="p-4 rounded-full bg-gray-200 hover:bg-gray-300">
          {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
        </button>
        <button onClick={() => setIsVideoOn(!isVideoOn)}
          className="p-4 rounded-full bg-gray-200 hover:bg-gray-300">
          {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
        </button>
        <button onClick={() => setIsCallActive(!isCallActive)}
          className={`p-4 rounded-full ${isCallActive ? 'bg-red-500' : 'bg-green-500'} text-white`}>
          {isCallActive ? <PhoneOff size={24} /> : <Video size={24} />}
        </button>
        <button className="p-4 rounded-full bg-gray-200 hover:bg-gray-300">
          <Monitor size={24} />
        </button>
      </div>
    </div>
  );
}