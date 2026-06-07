import { useState } from 'react';
import { Shield, Eye, EyeOff } from 'lucide-react';

export default function SecurityPage() {
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const getStrength = () => {
    if (password.length === 0) return { text: '', color: '' };
    if (password.length < 4) return { text: 'Weak', color: 'bg-red-500' };
    if (password.length < 8) return { text: 'Medium', color: 'bg-yellow-500' };
    return { text: 'Strong', color: 'bg-green-500' };
  };

  const strength = getStrength();

  return (
    <div className="p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Shield size={28} /> Security & Access
      </h1>

      {/* Password Strength */}
      <div className="bg-white border rounded-xl p-5 mb-4">
        <h2 className="font-semibold mb-3">Password Strength Meter</h2>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 pr-10"
          />
          <button onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-500">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {password && (
          <div className="mt-2">
            <div className="h-2 rounded-full bg-gray-200 mt-2">
              <div className={`h-2 rounded-full ${strength.color} transition-all`}
                style={{ width: password.length < 4 ? '33%' : password.length < 8 ? '66%' : '100%' }} />
            </div>
            <p className="text-sm mt-1 font-medium">{strength.text}</p>
          </div>
        )}
      </div>

      {/* 2FA OTP */}
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-semibold mb-3">Two-Factor Authentication (2FA)</h2>
        <button onClick={() => setShowOtp(!showOtp)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4">
          {showOtp ? 'Hide OTP' : 'Enable 2FA'}
        </button>
        {showOtp && (
          <div>
            <p className="text-sm text-gray-600 mb-3">Enter the 6-digit OTP sent to your phone</p>
            <div className="flex gap-2">
              {otp.map((digit, i) => (
                <input key={i} type="text" maxLength={1} value={digit}
                  onChange={e => {
                    const newOtp = [...otp];
                    newOtp[i] = e.target.value;
                    setOtp(newOtp);
                  }}
                  className="w-10 h-10 border-2 rounded-lg text-center font-bold text-lg"
                />
              ))}
            </div>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg">
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}