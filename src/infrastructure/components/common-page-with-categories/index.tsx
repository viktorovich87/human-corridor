import Breadcrumbs from 'nextjs-breadcrumbs';

import DefaultLayout from '../../../infrastructure/layouts/default/default-layout.component';
import SelectServicesSection from '../../../infrastructure/sections/select-services/select-services-section.component';
import { ICommonPage } from "./types"

const CommonPageWithCategories: React.FC<ICommonPage> = ({
    title,
    servicePageCategory,
    services
}) => {
    return (
        <DefaultLayout title="">
            <Breadcrumbs
                labelsToUppercase
                rootLabel="Resources "
                transformLabel={(title) => "\xa0" + title + "\xa0" + '/'}
            />
            <SelectServicesSection
                {...{ title }}
                {...{ servicePageCategory }}
                {...{ services }}
                subheading={'Human Corridor'}
            />
        </DefaultLayout>

    );
}

export default CommonPageWithCategories;