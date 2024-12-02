import type { NextPage } from 'next';

import DefaultLayout from '../../infrastructure/layouts/default/default-layout.component';

import SelectServicesSection from '../../infrastructure/sections/select-services/select-services-section.component';

import mainServices from '../../data/main-services';

const HomePage: NextPage = () => {
  return (
    <DefaultLayout title="">
      <SelectServicesSection
        title={'Main Resources'}
        subheading={'Resources'}
        servicePageCategory={'main'}
        services={mainServices}
      />
    </DefaultLayout>
  );
}

export default HomePage;