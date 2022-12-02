module Main where

import Prelude

import Data.Array (reverse, sort, take)
import Data.Foldable (sum)
import Data.Int (fromString)
import Data.Maybe (Maybe)
import Data.String (Pattern(..), split)
import Data.Traversable (traverse)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Effect.Class.Console (logShow)
import Node.Encoding (Encoding(..))
import Node.FS.Aff (readTextFile)

splitLines :: String -> Array String
splitLines = split (Pattern "\n\n")

splitStrings :: String -> Array String
splitStrings = split (Pattern "\n")

numberifyStringArray :: Array String -> Maybe (Array Int)
numberifyStringArray = traverse fromString

getArrayOfArrays ∷ String → Array (Array String)
getArrayOfArrays = map splitLines <<< splitStrings

sumFromNumbersString :: String -> Maybe Int
sumFromNumbersString = splitStrings >>> numberifyStringArray >>> map sum

getSumOfNLargest ∷ String → Int → Maybe Int
getSumOfNLargest s n = sort >>> reverse >>> take n >>> sum <$> numberArrays
  where
  numberArrays = traverse sumFromNumbersString $ splitLines s

main :: Effect Unit
main = launchAff_ do
  input <- readTextFile UTF8 "input"
  let result = getSumOfNLargest input 3
  liftEffect $ logShow $ result