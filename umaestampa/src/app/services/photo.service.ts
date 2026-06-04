import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Platform } from '@ionic/angular';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {

  constructor(private platform: Platform) {}

  // Returns a persistent base64 data URL, safe to store in Ionic Storage
  public async pickPhoto(): Promise<string | null> {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 80,
      promptLabelHeader: 'Foto',
      promptLabelCancel: 'Cancelar',
      promptLabelPhoto: 'Escolher da galeria',
      promptLabelPicture: 'Tirar fotografia',
    });

    if (this.platform.is('hybrid')) {
      // On device: read file directly as base64
      const file = await Filesystem.readFile({
        path: capturedPhoto.path!,
      });
      return `data:image/jpeg;base64,${file.data}`;
    } else {
      // On web: fetch the blob URL and convert to base64
      const response = await fetch(capturedPhoto.webPath!);
      const blob = await response.blob();
      return this.convertBlobToBase64(blob);
    }
  }

  private convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }
}