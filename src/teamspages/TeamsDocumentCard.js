import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
} from '@fluentui/react/lib/DocumentCard';
import { ImageFit } from '@fluentui/react/lib/Image';

const previewProps = {
  previewImages: [
    {
      name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
      linkProps: {
        href: 'http://localhost:3000/laptop.jpeg',
        target: '_blank',
      },
      previewImageSrc: "http://localhost:3000/laptop.jpeg",
      iconSrc: "",
      imageFit: ImageFit.cover,
      width: 250,
      height: 150,
    },
  ],
};
const DocumentCardActivityPeople = [{ name: 'Annie Lindqvist', profileImageSrc: "Female" }];

export const TeamsDocumentCard = () => (
    
            <div className="ms-Grid ms-depth-64">
            <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">

      <DocumentCard
    aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago."
    onClickHref="https://applaunch.azurewebsites.net/home"
  >
    <DocumentCardPreview {...previewProps} />
    <DocumentCardTitle
      title={
        'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_' +
        'it_needs_truncating.pptx'
      }
      shouldTruncate
    />
    <DocumentCardActivity activity="Created a few minutes ago" people={DocumentCardActivityPeople} />
  </DocumentCard>
  </div>

 </div>
 </div>


);
