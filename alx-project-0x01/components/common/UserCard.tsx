import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4 border-b pb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="text-gray-700">{email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p className="text-gray-700">{phone}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Website</p>
          <p className="text-blue-600">{website}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Address</p>
          <p className="text-gray-700">
            {address.street}, {address.suite}, {address.city}, {address.zipcode}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Company</p>
          <p className="text-gray-700 font-medium">{company.name}</p>
          <p className="text-gray-500 text-sm italic">
            "{company.catchPhrase}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
