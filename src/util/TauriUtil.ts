import { resolveResource } from '@tauri-apps/api/path';

export async function GetTauriPath(path: string) {
  return await resolveResource(path);
}
