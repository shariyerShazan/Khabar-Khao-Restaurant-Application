import { useAddRoleMutation } from '@/redux/features/auth.api';
import { useNavigate } from 'react-router';
import { useState } from 'react';

import { FaUtensils } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { IoRestaurant } from 'react-icons/io5';
import logo from '@/assets/brand-logo.png';

const roles = [
  {
    name: 'CUSTOMER',
    icon: FaUtensils,
    desc: 'Order delicious food anytime',
  },
  {
    name: 'RIDER',
    icon: MdDeliveryDining,
    desc: 'Deliver food & earn money',
  },
  {
    name: 'RESTAURANT',
    icon: IoRestaurant,
    desc: 'Manage your restaurant',
  },
];

const AddUserRole = () => {
  const [addRole] = useAddRoleMutation();
  const navigate = useNavigate();
  const [loadingRole, setLoadingRole] = useState<string | null>(null);

  const handleRole = async (role: string) => {
    try {
      setLoadingRole(role);
      await addRole({ role }).unwrap();
      navigate('/');
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingRole(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0f] relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-[#ea2853] blur-[200px] opacity-10 top-[-160px] right-[-160px]" />

      {/* CARD */}
      <div className="w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white text-center shadow-2xl z-10">
        {/* LOGO */}
        <div className="flex justify-center mb-3">
          <img src={logo} className="w-14 h-14 object-contain" />
        </div>

        <h1 className="text-2xl font-bold">Choose Your Role</h1>

        <p className="text-sm text-gray-400 mb-6">
          Tell us how you want to use{' '}
          <span className="text-[#ea2853] font-semibold">Khabar Khao</span>
        </p>

        {/* ROLES */}
        <div className="space-y-4">
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.name}
                onClick={() => handleRole(role.name)}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#ea2853] cursor-pointer transition-all duration-300 hover:scale-[1.03] group"
              >
                <Icon className="text-2xl text-white group-hover:text-[#ea2853] transition" />

                <div className="text-left flex-1">
                  <p className="font-semibold">{role.name}</p>
                  <p className="text-xs text-gray-400">{role.desc}</p>
                </div>

                {loadingRole === role.name && (
                  <span className="text-xs animate-pulse text-gray-300">
                    loading...
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddUserRole;
