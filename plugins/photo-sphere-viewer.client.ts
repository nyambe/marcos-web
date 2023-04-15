// plugins/photo-sphere-viewer.client.ts
import PhotoSphereViewer from 'photo-sphere-viewer';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('photoSphereViewer', PhotoSphereViewer);
});
