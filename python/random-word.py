import random
with open("PersianWordList.txt", "r", encoding="utf-8") as f:
  words = f.readlines()


rand_word_list = random.choices(words, k=500)
with open("output.txt", 'w', encoding="utf-8") as output:
  for w in rand_word_list:
    output.write(f"{w}")
  print("done!")

# this script for choise random word list and wirte an new new file
# @Qiamast