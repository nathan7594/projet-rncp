import Navbar from '../ui/component/navbar';
import { LoginForm } from './login-form';
import { Suspense } from 'react';

export default async function LoginPage() {
  return (
    <>
      <Navbar />

      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="container mx-auto flex h-full items-center justify-center px-6 py-12">
          <div className="bg-white px-8 py-10 md:w-8/12 lg:w-5/12">
            <Suspense fallback={<>Loading...</>}>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
