import Breadcrumbs from 'nextjs-breadcrumbs';

import DefaultLayout from '../../../infrastructure/layouts/default/default-layout.component';
import SelectServicesSection from '../../../infrastructure/sections/select-services/select-services-section.component';
import Button from "../../../infrastructure/components/button/button.component";
import { ICommonPage } from "./types"

const CommonPageWithCategories: React.FC<ICommonPage> = ({
    title,
    servicePageCategory,
    services
}) => {

    const goBack = () => {
        window.history.back()
    }
    
    return (
        <DefaultLayout title="">
            <Breadcrumbs
                labelsToUppercase
                rootLabel="Resources "
                transformLabel={(title) => "\xa0" + title + "\xa0" + '/'}
            />
            <Button onClick={goBack} label={'Back'} disabled={false} backBtn={true}/>
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

function useHistory() {
    throw new Error('Function not implemented.');
}
