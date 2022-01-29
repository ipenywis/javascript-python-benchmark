with open('../assets/largeFile.csv') as f: content = f.read()

print("Content: ", content[:1000])