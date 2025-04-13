import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Vector Background Elements */}
      <div className="absolute inset-0 vector-pattern opacity-10"></div>
      <div className="absolute inset-0 vector-dots opacity-5"></div>
      
      {/* Decorative Blobs */}
      <div className="decorative-blob w-[500px] h-[500px] -top-40 -left-40"></div>
      <div className="decorative-blob w-[400px] h-[400px] -bottom-20 -right-20"></div>
      
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/40 via-transparent to-amber-100/40 animate-gradient">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA4YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiIGZpbGw9IiNlM2U2ZWYiLz48cGF0aCBkPSJNMTIgMjhjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0eiIgZmlsbD0iI2UzZTZlZiIvPjxwYXRoIGQ9Ik0yMCAyMGMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNCAxLjc5LTQgNC00IDQgMS43OSA0IDR6IiBmaWxsPSIjZTNlNmVmIi8+PHBhdGggZD0iTTQ4IDIwYzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiIGZpbGw9IiNlM2U2ZWYiLz48cGF0aCBkPSJNMzYgMzJjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0eiIgZmlsbD0iI2UzZTZlZiIvPjxwYXRoIGQ9Ik0yMCA0NGMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNCAxLjc5LTQgNC00IDQgMS43OSA0IDR6IiBmaWxsPSIjZTNlNmVmIi8+PHBhdGggZD0iTTQ4IDQ0YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiIGZpbGw9IiNlM2U2ZWYiLz48L2c+PC9zdmc+')] opacity-5" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background; 