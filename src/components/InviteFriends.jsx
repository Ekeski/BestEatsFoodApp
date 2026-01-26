import React, { useState } from "react";
import { AiOutlineClose, AiOutlineCopy, AiOutlineCheck } from "react-icons/ai";
import { MdShare } from "react-icons/md";

export default function InviteFriends({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const referralCode = "BESTEATS2024XYZ";
  const referralLink = `https://besteats.com?ref=${referralCode}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Sample referral stats
  const referrals = [
    {
      id: 1,
      name: "Chinedu Eze",
      status: "Completed",
      date: "Oct 15, 2024",
      bonus: "₦500",
    },
    {
      id: 2,
      name: "Ngozi Samuel",
      status: "Completed",
      date: "Oct 10, 2024",
      bonus: "₦500",
    },
    {
      id: 3,
      name: "Adebayo Okonkwo",
      status: "Pending",
      date: "Oct 5, 2024",
      bonus: "₦0",
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose}></div>

      {/* Sidebar */}
      <div className="fixed top-0 right-0 w-full max-w-md h-screen bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Invite Friends
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Referral Bonus Card */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-6 text-white shadow-lg">
            <h3 className="text-lg font-bold mb-2">🎁 Earn Rewards</h3>
            <p className="text-sm mb-4">
              Get <span className="font-bold text-xl">5% discount</span> on your
              friend's first delivery
            </p>
            <p className="text-xs opacity-90">
              Plus earn bonus cash for each successful referral!
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              How it works
            </h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex gap-3">
                <span className="font-bold text-orange-600 min-w-6">1.</span>
                <p>Share your referral code or link with friends</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-orange-600 min-w-6">2.</span>
                <p>Your friend uses the code on their first order</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-orange-600 min-w-6">3.</span>
                <p>They get 5% off their first delivery</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-orange-600 min-w-6">4.</span>
                <p>You both get bonus credit in your wallets</p>
              </div>
            </div>
          </div>

          {/* Referral Code Section */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Your Referral Code
            </p>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 flex items-center">
                <code className="text-sm font-bold text-gray-900 dark:text-white">
                  {referralCode}
                </code>
              </div>
              <button
                onClick={handleCopyCode}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition font-semibold text-sm"
              >
                {copied ? (
                  <AiOutlineCheck size={18} />
                ) : (
                  <AiOutlineCopy size={18} />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Referral Link Section */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Share Link
            </p>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 flex items-center overflow-hidden">
                <code className="text-xs font-bold text-gray-900 dark:text-white truncate">
                  {referralLink}
                </code>
              </div>
              <button
                onClick={handleCopyLink}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition font-semibold text-sm"
              >
                {copied ? (
                  <AiOutlineCheck size={18} />
                ) : (
                  <MdShare size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Recent Referrals */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              Recent Referrals
            </h4>
            <div className="space-y-2">
              {referrals.map((referral) => (
                <div
                  key={referral.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 flex justify-between items-start"
                >
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {referral.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {referral.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-xs font-bold ${
                        referral.status === "Completed"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {referral.status}
                    </p>
                    <p className="text-sm font-bold text-orange-600">
                      {referral.bonus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total Bonus */}
          <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-4 border-l-4 border-orange-600">
            <p className="text-xs text-gray-700 dark:text-gray-400 mb-1">
              Total Referral Bonus
            </p>
            <p className="text-2xl font-bold text-orange-600">₦1,000</p>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="border-t dark:border-gray-700 p-4 grid grid-cols-2 gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm transition">
            Share on WhatsApp
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg font-semibold text-sm transition">
            Share on Twitter
          </button>
        </div>
      </div>
    </>
  );
}
