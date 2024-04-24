import { auth } from '@/auth';
import Header from '../ui/component/header';

import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await auth();

  // if (!session?.user) {
  //   return redirect("/api/auth/signin");
  // }

  const user = session?.user;

  return (
    <>
      <Header />
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="bg-ct-dark-100 mx-auto flex h-[20rem] max-w-4xl items-center justify-center rounded-md">
          <div>
            <p className="mb-3 text-center text-5xl font-semibold">
              Profile Page
            </p>
            <div className="flex items-center gap-8">
              <div>
                <Image
                  src={user?.image ? user.image : '/images/default.png'}
                  alt={`profile photo of ${user?.name}`}
                  width={90}
                  height={90}
                />
              </div>
              <div className="mt-8">
                <p className="mb-3">ID: {user?.id}</p>
                <p className="mb-3">Name: {user?.name}</p>
                <p className="mb-3">Email: {user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
