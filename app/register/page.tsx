import Header from '../ui/component/header';
import Navbar from '../ui/component/navbar';

import { RegisterForm } from './register-form';

export default async function RegisterPage() {
  return (
    <>
      <Navbar />

      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="container mx-auto flex h-full items-center justify-center px-6 py-12">
          <div className="bg-white px-8 py-10 md:w-8/12 lg:w-5/12">
            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  );
}
