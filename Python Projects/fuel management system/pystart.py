from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

gauth = GoogleAuth()
# Try to load saved client credentials
gauth.LoadCredentialsFile("mycreds.txt")
if gauth.credentials is None:
    # Authenticate if they're not there
    gauth.LocalWebserverAuth()
elif gauth.access_token_expired:
    # Refresh them if expired
    gauth.Refresh()
else:
    # Initialize the saved creds
    gauth.Authorize()
# Save the current credentials to a file
gauth.SaveCredentialsFile("mycreds.txt")

drive = GoogleDrive(gauth)
# file=drive.CreateFile({'id': '1G4x0LrCPDqMPrVIWtg0xK0YcQ7RV7UFq'})
# file.SetContentFile('petrol.txt')
# file.Upload()
file_list = drive.ListFile({'q': "'1XeaEXKVokeFW5f7zWg5igwL1yojWJWOx' in parents and trashed=false"}).GetList()
for file1 in file_list:
      print('title: %s, id: %s' % (file1['title'], file1['id']))
